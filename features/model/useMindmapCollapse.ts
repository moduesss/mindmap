import { useMemo, useEffect, useState, useRef, useCallback } from "react";
import { useReactFlow, Node, Edge } from "@xyflow/react";
import Dagre from "@dagrejs/dagre";
import { UseMindmapCollapseOptions } from "../lib/types";

interface CollapseNodeData {
  expandable?: boolean;
  expanded?: boolean;
}

function filterCollapsedChildren(dagre: Dagre.graphlib.Graph, node: Node) {
  const children = dagre.successors(node.id) as unknown as string[] | undefined;

  const data = node.data as CollapseNodeData;
  data.expandable = !!children?.length;

  if (!data.expanded) {
    while (children?.length) {
      const child = children.pop()!;
      children.push(...(dagre.successors(child) as unknown as string[]));
      dagre.removeNode(child);
    }
  }
}

function useMindmapCollapse(
    nodes: Node[],
    edges: Edge[],
    { direction = "LR", spacing = [250, 80] }: UseMindmapCollapseOptions = {}
): { nodes: Node[]; edges: Edge[] } {
  const { getNode } = useReactFlow();
  const [animatedNodes, setAnimatedNodes] = useState<Node[]>([]);
  const [animatedEdges, setAnimatedEdges] = useState<Edge[]>([]);
  const previousTargetNodesRef = useRef<Node[]>([]);

  // Вычисляем целевые позиции и edges
  const { targetNodes, targetEdges } = useMemo(() => {
    const dagre = new Dagre.graphlib.Graph()
        .setDefaultEdgeLabel(() => ({}))
        .setGraph({
          rankdir: direction,
          nodesep: spacing[1],
          ranksep: spacing[0],
          marginx: 20,
          marginy: 20,
        });

    // Добавляем вершины в dagre граф
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      dagre.setNode(node.id, {
        width: 200,
        height: 50,
        data: node.data,
      });
    }

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      dagre.setEdge(edge.source, edge.target);
    }

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      filterCollapsedChildren(dagre, node);
    }

    Dagre.layout(dagre);

    const rootNode = nodes.find((n) => n.id === "root");
    let rootOffset = { x: 0, y: 0 };

    if (rootNode && dagre.hasNode("root")) {
      const rootDagrePos = dagre.node("root");
      rootOffset = {
        x: -rootDagrePos.x,
        y: -rootDagrePos.y,
      };
    }

    // Получаем только те узлы, которые остались в Dagre графе
    const validNodes: Node[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!dagre.hasNode(node.id)) continue;

      const { x, y } = dagre.node(node.id);
      const position = {
        x: x + rootOffset.x - 100,
        y: y + rootOffset.y - 25,
      };

      const data = {
        ...node.data,
        direction,
      };
      validNodes.push({ ...node, position, data });
    }

    // Извлекаем edges из Dagre графа после обработки
    const dagreEdges: Edge[] = [];
    const dagreEdgesList = dagre.edges();
    for (let i = 0; i < dagreEdgesList.length; i++) {
      const edgeObj = dagreEdgesList[i];
      const edgeId = `${edgeObj.v}-${edgeObj.w}`;
      dagreEdges.push({
        id: edgeId,
        source: edgeObj.v,
        target: edgeObj.w,
      });
    }

    return { targetNodes: validNodes, targetEdges: dagreEdges };
  }, [nodes, edges, direction, spacing]);

  // Анимация к целевым позициям
  // @ts-ignore
  useEffect(() => {
    const previousTargetNodes = previousTargetNodesRef.current;

    if (previousTargetNodes.length === 0) {
      setAnimatedNodes(targetNodes);
      setAnimatedEdges(targetEdges);
      previousTargetNodesRef.current = targetNodes;
      return;
    }

    // Строим карту родителей целевых ребер
    const parentMap = new Map<string, string>();
    for (let i = 0; i < targetEdges.length; i++) {
      const edge = targetEdges[i];
      parentMap.set(edge.target, edge.source);
    }

    // Собираем множества идентификаторов для поиска различий
    const currentIds = new Set<string>();
    for (let i = 0; i < targetNodes.length; i++) {
      currentIds.add(targetNodes[i].id);
    }
    const previousIds = new Set<string>();
    for (let i = 0; i < previousTargetNodes.length; i++) {
      previousIds.add(previousTargetNodes[i].id);
    }

    // Фильтруем появившиеся, оставшиеся и исчезающие узлы
    const appearingNodes: Node[] = [];
    const stayingNodes: Node[] = [];
    const disappearingNodes: Node[] = [];

    for (let i = 0; i < targetNodes.length; i++) {
      const n = targetNodes[i];
      if (!previousIds.has(n.id)) {
        appearingNodes.push(n);
      } else {
        stayingNodes.push(n);
      }
    }
    for (let i = 0; i < previousTargetNodes.length; i++) {
      const n = previousTargetNodes[i];
      if (!currentIds.has(n.id)) {
        disappearingNodes.push(n);
      }
    }

    // Если нет изменений узлов, просто обновляем позиции
    if (appearingNodes.length === 0 && disappearingNodes.length === 0) {
      if (stayingNodes.length > 0) {
        animatePositions(stayingNodes, targetNodes, targetEdges);
      } else {
        setAnimatedNodes(targetNodes);
        setAnimatedEdges(targetEdges);
      }
      previousTargetNodesRef.current = targetNodes;
      return;
    }

    // Создаем полный список узлов для анимации (включая исчезающие)
    const allNodesForAnimation: Node[] = [];
    // добавляем все видимые узлы
    for (let i = 0; i < targetNodes.length; i++) {
      allNodesForAnimation.push(targetNodes[i]);
    }
    // добавляем исчезающие узлы
    for (let i = 0; i < disappearingNodes.length; i++) {
      allNodesForAnimation.push(disappearingNodes[i]);
    }

    // Создаем переходы
    const transitions: Array<{
      id: string;
      from: { x: number; y: number };
      to: { x: number; y: number };
      node: Node;
      type: "appearing" | "staying" | "disappearing";
    }> = [];

    // Переходы для появляющихся узлов
    for (let i = 0; i < appearingNodes.length; i++) {
      const node = appearingNodes[i];
      const parentId = parentMap.get(node.id);
      const parentNode = parentId
          ? getNode(parentId) || targetNodes.find((n) => n.id === parentId)
          : null;
      const fromPosition = parentNode ? parentNode.position : node.position;
      transitions.push({
        id: node.id,
        from: fromPosition,
        to: node.position,
        node: { ...node, style: { ...node.style, opacity: 0 } },
        type: "appearing",
      });
    }

    // Переходы для остающихся узлов
    for (let i = 0; i < stayingNodes.length; i++) {
      const node = stayingNodes[i];
      transitions.push({
        id: node.id,
        from: getNode(node.id)?.position ?? node.position,
        to: node.position,
        node,
        type: "staying",
      });
    }

    // Переходы для исчезающих узлов
    for (let i = 0; i < disappearingNodes.length; i++) {
      const node = disappearingNodes[i];
      const parentId = parentMap.get(node.id);
      const parentNode = parentId
          ? getNode(parentId) || targetNodes.find((n) => n.id === parentId)
          : null;
      const toPosition = parentNode ? parentNode.position : node.position;
      transitions.push({
        id: node.id,
        from: getNode(node.id)?.position ?? node.position,
        to: toPosition,
        node: { ...node, style: { ...node.style, opacity: 1 } },
        type: "disappearing",
      });
    }

    animateWithDisappearing(transitions, targetNodes, allNodesForAnimation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    previousTargetNodesRef.current = targetNodes;
  }, [targetNodes, targetEdges, getNode]);

  // Функция анимации позиций (без появления/исчезновения)
  const animatePositions = useCallback(
      (nodesToAnimate: Node[], finalNodes: Node[], finalEdges: Edge[]) => {
        const transitions: Array<{
          id: string;
          from: { x: number; y: number };
          to: { x: number; y: number };
          node: Node;
        }> = [];
        for (let i = 0; i < nodesToAnimate.length; i++) {
          const node = nodesToAnimate[i];
          transitions.push({
            id: node.id,
            from: getNode(node.id)?.position ?? node.position,
            to: node.position,
            node,
          });
        }

        const duration = 300;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);

          const currNodes: Node[] = [];
          for (let i = 0; i < transitions.length; i++) {
            const { node, from, to } = transitions[i];
            currNodes.push({
              ...node,
              position: {
                x: from.x + (to.x - from.x) * easeOut,
                y: from.y + (to.y - from.y) * easeOut,
              },
            });
          }

          const currNodeIds = new Set<string>();
          for (let i = 0; i < currNodes.length; i++) {
            currNodeIds.add(currNodes[i].id);
          }

          const animatedEdges: Edge[] = [];
          for (let i = 0; i < finalEdges.length; i++) {
            const edge = finalEdges[i];
            if (currNodeIds.has(edge.source) && currNodeIds.has(edge.target)) {
              animatedEdges.push(edge);
            }
          }

          setAnimatedNodes(currNodes);
          setAnimatedEdges(animatedEdges);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setAnimatedNodes(finalNodes);
            setAnimatedEdges(targetEdges);
          }
        };

        requestAnimationFrame(animate);
      },
      [getNode, setAnimatedNodes, setAnimatedEdges, targetEdges]
  );

  // Функция анимации с исчезающими узлами
  const animateWithDisappearing = useCallback(
      (
          transitions: Array<{
            id: string;
            from: { x: number; y: number };
            to: { x: number; y: number };
            node: Node;
            type: "appearing" | "staying" | "disappearing";
          }>,
          finalNodes: Node[],
          allNodes: Node[]
      ) => {
        // Устанавливаем рёбра для всех узлов (включая исчезающие) - используем targetEdges
        const allNodeIds = new Set<string>();
        for (let i = 0; i < allNodes.length; i++) {
          allNodeIds.add(allNodes[i].id);
        }
        const initialAnimationEdges: Edge[] = [];
        for (let i = 0; i < targetEdges.length; i++) {
          const edge = targetEdges[i];
          if (allNodeIds.has(edge.source) && allNodeIds.has(edge.target)) {
            initialAnimationEdges.push(edge);
          }
        }
        setAnimatedEdges(initialAnimationEdges);

        const duration = 400;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);

          const currNodes: Node[] = [];
          for (let i = 0; i < transitions.length; i++) {
            const { node, from, to, type } = transitions[i];
            const animatedPosition = {
              x: from.x + (to.x - from.x) * easeOut,
              y: from.y + (to.y - from.y) * easeOut,
            };
            let opacity = 1;
            if (type === "appearing") {
              opacity = easeOut;
            } else if (type === "disappearing") {
              opacity = 1 - easeOut;
            }
            currNodes.push({
              ...node,
              position: animatedPosition,
              style: {
                ...node.style,
                opacity,
              },
            });
          }

          const currNodeIds = new Set<string>();
          for (let i = 0; i < currNodes.length; i++) {
            currNodeIds.add(currNodes[i].id);
          }
          const animatedEdges: Edge[] = [];
          for (let i = 0; i < targetEdges.length; i++) {
            const edge = targetEdges[i];
            if (currNodeIds.has(edge.source) && currNodeIds.has(edge.target)) {
              animatedEdges.push(edge);
            }
          }

          setAnimatedNodes(currNodes);
          setAnimatedEdges(animatedEdges);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Финальное состояние - только целевые узлы
            const finalStyledNodes: Node[] = [];
            for (let i = 0; i < finalNodes.length; i++) {
              const node = finalNodes[i];
              finalStyledNodes.push({
                ...node,
                style: { ...node.style, opacity: 1 },
              });
            }
            setAnimatedNodes(finalStyledNodes);
            setAnimatedEdges(targetEdges);
          }
        };

        requestAnimationFrame(animate);
      },
      [setAnimatedEdges, setAnimatedNodes, targetEdges]
  );

  // Мемоизация для больших наборов данных с проверкой целостности
  const finalNodes = animatedNodes.length > 0 ? animatedNodes : targetNodes;
  let finalEdges = animatedEdges.length > 0 ? animatedEdges : targetEdges;

  // Дополнительная проверка: если у нас есть nodes, но нет edges, используем targetEdges
  if (finalNodes.length > 0 && finalEdges.length === 0 && targetEdges.length > 0) {
    finalEdges = targetEdges;
  }

  return {
    nodes: finalNodes,
    edges: finalEdges,
  };
}

export default useMindmapCollapse;
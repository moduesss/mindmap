export const MINDMAP_DATA = {
  nodes: [
    // Root node
    {
      id: "root",
      type: "input",
      data: { label: "Реконструкция Люберецкие очистные сооружения. 3 этап" },
      style: { background: "#fff", color: "white", fontWeight: "bold", width: 300 },
    },

    // Level 1 nodes
    {
      id: "project-participants",
      data: { label: "Проект и участники" },
      style: { background: "#4ecdc4", color: "white", width: 200 },
    },
    {
      id: "technical-solutions",
      data: { label: "Технические решения" },
      style: { background: "#4ecdc4", color: "white", width: 200 },
    },
    {
      id: "calendar-plan",
      data: { label: "Календарный план" },
      style: { background: "#4ecdc4", color: "white", width: 200 },
    },

    // Level 2 nodes - Project and Participants
    {
      id: "project",
      data: { label: "Проект" },
      style: { background: "#45b7d1", color: "white", width: 150 },
    },
    {
      id: "participants",
      data: { label: "Участники" },
      style: { background: "#45b7d1", color: "white", width: 150 },
    },

    // Level 2 nodes - Technical Solutions
    {
      id: "tech-lines",
      data: { label: "Технологические линии" },
      style: { background: "#45b7d1", color: "white", width: 180 },
    },
    {
      id: "equipment",
      data: { label: "Оборудование" },
      style: { background: "#45b7d1", color: "white", width: 150 },
    },

    // Level 3 nodes - Project details
    {
      id: "project-name",
      data: { label: "Наименование: Реконструкция ЛОС" },
      style: { background: "#96ceb4", color: "white", width: 200 },
    },
    {
      id: "project-codes",
      data: { label: "Шифры" },
      style: { background: "#96ceb4", color: "white", width: 120 },
    },
    {
      id: "project-stage",
      data: { label: "Стадия проектирования" },
      style: { background: "#96ceb4", color: "white", width: 160 },
    },
    {
      id: "customer",
      data: { label: "Заказчик: ГУП МосводоканалНИИпроект" },
      style: { background: "#96ceb4", color: "white", width: 250 },
    },

    // Level 3 nodes - Participants
    {
      id: "designer",
      data: { label: "Проектировщик" },
      style: { background: "#96ceb4", color: "white", width: 140 },
    },
    {
      id: "contractor",
      data: { label: "Подрядчик" },
      style: { background: "#96ceb4", color: "white", width: 120 },
    },

    // Level 3 nodes - Technical Lines
    {
      id: "wastewater-line",
      data: { label: "Линия очистки сточных вод" },
      style: { background: "#96ceb4", color: "white", width: 180 },
    },
    {
      id: "sludge-line",
      data: { label: "Линия обработки осадка" },
      style: { background: "#96ceb4", color: "white", width: 170 },
    },
    {
      id: "automation-system",
      data: { label: "Система автоматизации" },
      style: { background: "#96ceb4", color: "white", width: 160 },
    },

    // Level 3 nodes - Equipment
    {
      id: "pump-equipment",
      data: { label: "Насосное оборудование" },
      style: { background: "#96ceb4", color: "white", width: 160 },
    },
    {
      id: "aeration-equipment",
      data: { label: "Аэрационное оборудование" },
      style: { background: "#96ceb4", color: "white", width: 170 },
    },
    {
      id: "control-systems",
      data: { label: "Системы КИП и А" },
      style: { background: "#96ceb4", color: "white", width: 140 },
    },

    // Level 2 nodes - Calendar Plan
    {
      id: "stage-1",
      data: { label: "Этап 1: Подготовительные работы" },
      style: { background: "#45b7d1", color: "white", width: 200 },
    },
    {
      id: "stage-2",
      data: { label: "Этап 2: Основные работы" },
      style: { background: "#45b7d1", color: "white", width: 180 },
    },
    {
      id: "stage-3",
      data: { label: "Этап 3: Пуско-наладочные работы" },
      style: { background: "#45b7d1", color: "white", width: 200 },
    },

    // Level 4 nodes - Project codes details
    {
      id: "code-1",
      data: { label: "14414‑П‑ЛОС‑20‑КР8" },
      style: { background: "#feca57", color: "white", width: 150 },
    },
    {
      id: "code-2",
      data: { label: "14414‑П‑ЛОС‑20‑КР6" },
      style: { background: "#feca57", color: "white", width: 150 },
    },
    {
      id: "code-3",
      data: { label: "14414‑П‑ЛОС‑20‑КР5" },
      style: { background: "#feca57", color: "white", width: 150 },
    },

    // Level 4 nodes - Project stage details
    {
      id: "working-docs",
      data: { label: "Рабочая документация" },
      style: { background: "#feca57", color: "white", width: 160 },
    },
    {
      id: "project-docs",
      data: { label: "Проектная документация" },
      style: { background: "#feca57", color: "white", width: 170 },
    },

    // Level 4 nodes - Designer details
    {
      id: "design-company",
      data: { label: 'ООО "ГидроИнжПроект"' },
      style: { background: "#feca57", color: "white", width: 160 },
    },
    {
      id: "chief-engineer",
      data: { label: "Главный инженер проекта" },
      style: { background: "#feca57", color: "white", width: 170 },
    },

    // Level 4 nodes - Contractor details
    {
      id: "contractor-company",
      data: { label: 'ООО "СтройТехнологии"' },
      style: { background: "#feca57", color: "white", width: 160 },
    },
    {
      id: "foreman",
      data: { label: "Прораб объекта" },
      style: { background: "#feca57", color: "white", width: 130 },
    },
  ],

  edges: [
    // Root to Level 1
    { id: "e-root-project", source: "root", target: "project-participants" },
    { id: "e-root-technical", source: "root", target: "technical-solutions" },
    { id: "e-root-calendar", source: "root", target: "calendar-plan" },

    // Project and Participants to Level 2
    { id: "e-pp-project", source: "project-participants", target: "project" },
    { id: "e-pp-participants", source: "project-participants", target: "participants" },

    // Technical Solutions to Level 2
    { id: "e-ts-lines", source: "technical-solutions", target: "tech-lines" },
    { id: "e-ts-equipment", source: "technical-solutions", target: "equipment" },

    // Calendar Plan to Level 2
    { id: "e-cp-stage1", source: "calendar-plan", target: "stage-1" },
    { id: "e-cp-stage2", source: "calendar-plan", target: "stage-2" },
    { id: "e-cp-stage3", source: "calendar-plan", target: "stage-3" },

    // Project to Level 3
    { id: "e-project-name", source: "project", target: "project-name" },
    { id: "e-project-codes", source: "project", target: "project-codes" },
    { id: "e-project-stage", source: "project", target: "project-stage" },
    { id: "e-project-customer", source: "project", target: "customer" },

    // Participants to Level 3
    { id: "e-participants-designer", source: "participants", target: "designer" },
    { id: "e-participants-contractor", source: "participants", target: "contractor" },

    // Tech Lines to Level 3
    { id: "e-lines-wastewater", source: "tech-lines", target: "wastewater-line" },
    { id: "e-lines-sludge", source: "tech-lines", target: "sludge-line" },
    { id: "e-lines-automation", source: "tech-lines", target: "automation-system" },

    // Equipment to Level 3
    { id: "e-equipment-pump", source: "equipment", target: "pump-equipment" },
    { id: "e-equipment-aeration", source: "equipment", target: "aeration-equipment" },
    { id: "e-equipment-control", source: "equipment", target: "control-systems" },

    // Project codes to Level 4
    { id: "e-codes-1", source: "project-codes", target: "code-1" },
    { id: "e-codes-2", source: "project-codes", target: "code-2" },
    { id: "e-codes-3", source: "project-codes", target: "code-3" },

    // Project stage to Level 4
    { id: "e-stage-working", source: "project-stage", target: "working-docs" },
    { id: "e-stage-project", source: "project-stage", target: "project-docs" },

    // Designer to Level 4
    { id: "e-designer-company", source: "designer", target: "design-company" },
    { id: "e-designer-engineer", source: "designer", target: "chief-engineer" },

    // Contractor to Level 4
    { id: "e-contractor-company", source: "contractor", target: "contractor-company" },
    { id: "e-contractor-foreman", source: "contractor", target: "foreman" },
  ],

  meta: {
    generatedAt: new Date().toISOString(),
    rootId: "root",
    totalNodes: 31,
    totalEdges: 30,
  },
};

// Для обратной совместимости - экспорт в старом древовидном формате
export const TREE = {
  title: "Реконструкция Люберецкие очистные сооружения. 3 этап",
  children: [
    {
      title: "Проект и участники",
      children: [
        {
          title: "Проект",
          children: [
            { title: "Наименование: Реконструкция ЛОС" },
            {
              title: "Шифры",
              children: [
                { title: "14414‑П‑ЛОС‑20‑КР8" },
                { title: "14414‑П‑ЛОС‑20‑КР6" },
                { title: "14414‑П‑ЛОС‑20‑КР5" },
              ],
            },
            {
              title: "Стадия проектирования",
              children: [{ title: "Рабочая документация" }, { title: "Проектная документация" }],
            },
            { title: "Заказчик: ГУП МосводоканалНИИпроект" },
          ],
        },
        {
          title: "Участники",
          children: [
            {
              title: "Проектировщик",
              children: [{ title: 'ООО "ГидроИнжПроект"' }, { title: "Главный инженер проекта" }],
            },
            { title: "Подрядчик", children: [{ title: 'ООО "СтройТехнологии"' }, { title: "Прораб объекта" }] },
          ],
        },
      ],
    },
    {
      title: "Технические решения",
      children: [
        {
          title: "Технологические линии",
          children: [
            { title: "Линия очистки сточных вод" },
            { title: "Линия обработки осадка" },
            { title: "Система автоматизации" },
          ],
        },
        {
          title: "Оборудование",
          children: [
            { title: "Насосное оборудование" },
            { title: "Аэрационное оборудование" },
            { title: "Системы КИП и А" },
          ],
        },
      ],
    },
    {
      title: "Календарный план",
      children: [
        { title: "Этап 1: Подготовительные работы" },
        { title: "Этап 2: Основные работы" },
        { title: "Этап 3: Пуско-наладочные работы" },
      ],
    },
  ],
};

// Утилиты для работы с динамическим раскрытием
export class MindmapNavigator {
  constructor(mindmapData) {
    this.nodes = mindmapData.nodes;
    this.edges = mindmapData.edges;
    this.rootId = mindmapData.meta.rootId;

    // Создаем карту детей для быстрого поиска
    this.childrenMap = new Map();
    this.parentMap = new Map();

    this.edges.forEach((edge) => {
      if (!this.childrenMap.has(edge.source)) {
        this.childrenMap.set(edge.source, []);
      }
      this.childrenMap.get(edge.source).push(edge.target);
      this.parentMap.set(edge.target, edge.source);
    });
  }

  // Получить корневой узел
  getRootNode() {
    return this.nodes.find((node) => node.id === this.rootId);
  }

  // Получить детей узла
  getChildren(nodeId) {
    const childIds = this.childrenMap.get(nodeId) || [];
    return childIds.map((childId) => this.nodes.find((node) => node.id === childId));
  }

  // Проверить есть ли дети
  hasChildren(nodeId) {
    return this.childrenMap.has(nodeId) && this.childrenMap.get(nodeId).length > 0;
  }

  // Получить узел по ID
  getNode(nodeId) {
    return this.nodes.find((node) => node.id === nodeId);
  }

  // Получить начальное состояние (root + первый уровень)
  getInitialState() {
    const rootNode = this.getRootNode();
    if (!rootNode) return { nodes: [], edges: [] };

    const nodes = [rootNode];
    const edges = [];
    const children = this.getChildren(rootNode.id);

    children.forEach((child) => {
      nodes.push({
        ...child,
        data: {
          ...child.data,
          hasChildren: this.hasChildren(child.id),
        },
      });

      edges.push({
        id: `${rootNode.id}-${child.id}`,
        source: rootNode.id,
        target: child.id,
        type: "bezier",
      });
    });

    return { nodes, edges };
  }

  // Раскрыть узел
  expandNode(nodeId, existingNodes, existingEdges) {
    const children = this.getChildren(nodeId);
    const newNodes = [...existingNodes];
    const newEdges = [...existingEdges];

    // Проверяем, не раскрыт ли уже узел
    const alreadyExpanded = existingNodes.some((node) => this.parentMap.get(node.id) === nodeId);

    if (alreadyExpanded) {
      return { nodes: existingNodes, edges: existingEdges };
    }

    children.forEach((child) => {
      newNodes.push({
        ...child,
        data: {
          ...child.data,
          hasChildren: this.hasChildren(child.id),
        },
      });

      newEdges.push({
        id: `${nodeId}-${child.id}`,
        source: nodeId,
        target: child.id,
        type: "bezier",
      });
    });

    return { nodes: newNodes, edges: newEdges };
  }
}

// Создаем экземпляр навигатора
export const mindmapNavigator = new MindmapNavigator(MINDMAP_DATA);

export const MINDMAP_DATA = {
  nodes: [
    // Root node
    {
      id: "root",
      type: "input",
      data: { label: "Реконструкция Люберецкие очистные сооружения. 3 этап" },
    },

    // Level 1 nodes
    {
      id: "project-participants",
      data: { label: "Проект и участники" },
    },
    {
      id: "technical-solutions",
      data: { label: "Технические решения" },
    },
    {
      id: "calendar-plan",
      data: { label: "Календарный план" },
    },

    // Level 2 nodes - Project and Participants
    {
      id: "project",
      data: { label: "Проект" },
    },
    {
      id: "participants",
      data: { label: "Участники" },
    },

    // Level 2 nodes - Technical Solutions
    {
      id: "tech-lines",
      data: { label: "Технологические линии" },
    },
    {
      id: "equipment",
      data: { label: "Оборудование" },
    },

    // Level 3 nodes - Project details
    {
      id: "project-name",
      data: { label: "Наименование: Реконструкция ЛОС" },
    },
    {
      id: "project-codes",
      data: { label: "Шифры" },
    },
    {
      id: "project-stage",
      data: { label: "Стадия проектирования" },
    },
    {
      id: "customer",
      data: { label: "Заказчик: ГУП МосводоканалНИИпроект" },
    },

    // Level 3 nodes - Participants
    {
      id: "designer",
      data: { label: "Проектировщик" },
    },
    {
      id: "contractor",
      data: { label: "Подрядчик" },
    },

    // Level 3 nodes - Technical Lines
    {
      id: "wastewater-line",
      data: { label: "Линия очистки сточных вод" },
    },
    {
      id: "sludge-line",
      data: { label: "Линия обработки осадка" },
    },
    {
      id: "automation-system",
      data: { label: "Система автоматизации" },
    },

    // Level 3 nodes - Equipment
    {
      id: "pump-equipment",
      data: { label: "Насосное оборудование" },
    },
    {
      id: "aeration-equipment",
      data: { label: "Аэрационное оборудование" },
    },
    {
      id: "control-systems",
      data: { label: "Системы КИП и А" },
    },

    // Level 2 nodes - Calendar Plan
    {
      id: "stage-1",
      data: { label: "Этап 1: Подготовительные работы" },
    },
    {
      id: "stage-2",
      data: { label: "Этап 2: Основные работы" },
    },
    {
      id: "stage-3",
      data: { label: "Этап 3: Пуско-наладочные работы" },
    },

    // Level 4 nodes - Project codes details
    {
      id: "code-1",
      data: { label: "14414‑П‑ЛОС‑20‑КР8" },
    },
    {
      id: "code-2",
      data: { label: "14414‑П‑ЛОС‑20‑КР6" },
    },
    {
      id: "code-3",
      data: { label: "14414‑П‑ЛОС‑20‑КР5" },
    },

    // Level 4 nodes - Project stage details
    {
      id: "working-docs",
      data: { label: "Рабочая документация" },
    },
    {
      id: "project-docs",
      data: { label: "Проектная документация" },
    },

    // Level 4 nodes - Designer details
    {
      id: "design-company",
      data: { label: 'ООО "ГидроИнжПроект"' },
    },
    {
      id: "chief-engineer",
      data: { label: "Главный инженер проекта" },
    },

    // Level 4 nodes - Contractor details
    {
      id: "contractor-company",
      data: { label: 'ООО "СтройТехнологии"' },
    },
    {
      id: "foreman",
      data: { label: "Прораб объекта" },
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

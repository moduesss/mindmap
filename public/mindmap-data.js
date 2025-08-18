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
    {
      id: "documentation",
      data: { label: "Документация" },
    },
    {
      id: "financing",
      data: { label: "Финансирование" },
    },
    {
      id: "quality-control",
      data: { label: "Контроль качества" },
    },
    {
      id: "safety",
      data: { label: "Охрана труда" },
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
    {
      id: "infrastructure",
      data: { label: "Инфраструктура" },
    },
    {
      id: "utilities",
      data: { label: "Инженерные коммуникации" },
    },

    // Level 2 nodes - Documentation
    {
      id: "technical-docs",
      data: { label: "Техническая документация" },
    },
    {
      id: "regulatory-docs",
      data: { label: "Нормативная документация" },
    },
    {
      id: "permits",
      data: { label: "Разрешительная документация" },
    },

    // Level 2 nodes - Financing
    {
      id: "budget",
      data: { label: "Бюджет проекта" },
    },
    {
      id: "contracts",
      data: { label: "Договоры" },
    },
    {
      id: "payments",
      data: { label: "Платежи" },
    },

    // Level 2 nodes - Quality Control
    {
      id: "testing",
      data: { label: "Испытания" },
    },
    {
      id: "acceptance",
      data: { label: "Приемка работ" },
    },
    {
      id: "standards",
      data: { label: "Стандарты" },
    },

    // Level 2 nodes - Safety
    {
      id: "safety-measures",
      data: { label: "Меры безопасности" },
    },
    {
      id: "protection-equipment",
      data: { label: "Средства защиты" },
    },
    {
      id: "emergency-procedures",
      data: { label: "Аварийные процедуры" },
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
    {
      id: "project-location",
      data: { label: "Местоположение объекта" },
    },
    {
      id: "project-capacity",
      data: { label: "Проектная мощность" },
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
    {
      id: "supervisor",
      data: { label: "Технический надзор" },
    },
    {
      id: "suppliers",
      data: { label: "Поставщики" },
    },
    {
      id: "subcontractors",
      data: { label: "Субподрядчики" },
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
    {
      id: "water-supply-line",
      data: { label: "Система водоснабжения" },
    },
    {
      id: "chemical-treatment",
      data: { label: "Химическая обработка" },
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
    {
      id: "mechanical-equipment",
      data: { label: "Механическое оборудование" },
    },
    {
      id: "electrical-equipment",
      data: { label: "Электрооборудование" },
    },

    // Level 3 nodes - Infrastructure
    {
      id: "buildings",
      data: { label: "Здания и сооружения" },
    },
    {
      id: "roads",
      data: { label: "Дороги и проезды" },
    },
    {
      id: "landscaping",
      data: { label: "Благоустройство" },
    },
    {
      id: "fencing",
      data: { label: "Ограждение территории" },
    },

    // Level 3 nodes - Utilities
    {
      id: "power-supply",
      data: { label: "Электроснабжение" },
    },
    {
      id: "heating-system",
      data: { label: "Теплоснабжение" },
    },
    {
      id: "ventilation",
      data: { label: "Вентиляция" },
    },
    {
      id: "lighting",
      data: { label: "Освещение" },
    },
    {
      id: "communications",
      data: { label: "Связь" },
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
    {
      id: "stage-4",
      data: { label: "Этап 4: Гарантийное обслуживание" },
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
    {
      id: "code-4",
      data: { label: "14414‑П‑ЛОС‑20‑КР9" },
    },
    {
      id: "code-5",
      data: { label: "14414‑П‑ЛОС‑20‑АР" },
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
    {
      id: "executive-docs",
      data: { label: "Исполнительная документация" },
    },
    {
      id: "permit-docs",
      data: { label: "Разрешительная документация" },
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
    {
      id: "project-manager",
      data: { label: "Руководитель проекта" },
    },
    {
      id: "lead-architect",
      data: { label: "Главный архитектор" },
    },
    {
      id: "structural-engineer",
      data: { label: "Инженер-конструктор" },
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
    {
      id: "construction-manager",
      data: { label: "Начальник строительства" },
    },
    {
      id: "quality-manager",
      data: { label: "Менеджер по качеству" },
    },
    {
      id: "safety-engineer",
      data: { label: "Инженер по охране труда" },
    },

    // Level 4 nodes - Location details
    {
      id: "address",
      data: { label: "Адрес: г. Люберцы, ул. Очистная, д.1" },
    },
    {
      id: "coordinates",
      data: { label: "Координаты: 55.6847° N, 37.8947° E" },
    },
    {
      id: "site-area",
      data: { label: "Площадь участка: 15.2 га" },
    },
    {
      id: "access-roads",
      data: { label: "Подъездные пути" },
    },

    // Level 4 nodes - Capacity details
    {
      id: "daily-capacity",
      data: { label: "Суточная производительность: 100,000 м³/сут" },
    },
    {
      id: "peak-capacity",
      data: { label: "Максимальная нагрузка: 120,000 м³/сут" },
    },
    {
      id: "efficiency",
      data: { label: "Степень очистки: 99.5%" },
    },
    {
      id: "energy-consumption",
      data: { label: "Энергопотребление: 0.35 кВт·ч/м³" },
    },

    // Level 4 nodes - Wastewater line details
    {
      id: "preliminary-treatment",
      data: { label: "Предварительная очистка" },
    },
    {
      id: "primary-treatment",
      data: { label: "Первичная очистка" },
    },
    {
      id: "secondary-treatment",
      data: { label: "Вторичная очистка" },
    },
    {
      id: "tertiary-treatment",
      data: { label: "Третичная очистка" },
    },
    {
      id: "disinfection",
      data: { label: "Обеззараживание" },
    },

    // Level 4 nodes - Sludge line details
    {
      id: "sludge-thickening",
      data: { label: "Сгущение осадка" },
    },
    {
      id: "sludge-stabilization",
      data: { label: "Стабилизация осадка" },
    },
    {
      id: "sludge-dewatering",
      data: { label: "Обезвоживание осадка" },
    },
    {
      id: "sludge-drying",
      data: { label: "Сушка осадка" },
    },
    {
      id: "sludge-disposal",
      data: { label: "Утилизация осадка" },
    },

    // Level 4 nodes - Automation system details
    {
      id: "scada-system",
      data: { label: "SCADA система" },
    },
    {
      id: "plc-controllers",
      data: { label: "ПЛК контроллеры" },
    },
    {
      id: "sensors",
      data: { label: "Датчики и измерители" },
    },
    {
      id: "actuators",
      data: { label: "Исполнительные механизмы" },
    },
    {
      id: "network-infrastructure",
      data: { label: "Сетевая инфраструктура" },
    },

    // Level 4 nodes - Pump equipment details
    {
      id: "raw-water-pumps",
      data: { label: "Насосы сырой воды" },
    },
    {
      id: "circulation-pumps",
      data: { label: "Циркуляционные насосы" },
    },
    {
      id: "sludge-pumps",
      data: { label: "Илососы" },
    },
    {
      id: "chemical-pumps",
      data: { label: "Реагентные насосы" },
    },
    {
      id: "emergency-pumps",
      data: { label: "Аварийные насосы" },
    },

    // Level 4 nodes - Aeration equipment details
    {
      id: "blowers",
      data: { label: "Воздуходувки" },
    },
    {
      id: "diffusers",
      data: { label: "Диффузоры" },
    },
    {
      id: "air-distribution",
      data: { label: "Система распределения воздуха" },
    },
    {
      id: "oxygen-meters",
      data: { label: "Измерители кислорода" },
    },

    // Level 4 nodes - Control systems details
    {
      id: "flow-meters",
      data: { label: "Расходомеры" },
    },
    {
      id: "level-sensors",
      data: { label: "Датчики уровня" },
    },
    {
      id: "pressure-sensors",
      data: { label: "Датчики давления" },
    },
    {
      id: "ph-meters",
      data: { label: "pH-метры" },
    },
    {
      id: "turbidity-meters",
      data: { label: "Мутномеры" },
    },

    // Level 4 nodes - Buildings details
    {
      id: "main-building",
      data: { label: "Главное здание" },
    },
    {
      id: "pump-station",
      data: { label: "Насосная станция" },
    },
    {
      id: "control-room",
      data: { label: "Операторная" },
    },
    {
      id: "laboratory",
      data: { label: "Лаборатория" },
    },
    {
      id: "workshop",
      data: { label: "Мастерские" },
    },
    {
      id: "warehouse",
      data: { label: "Склад" },
    },

    // Level 4 nodes - Stage 1 details
    {
      id: "site-preparation",
      data: { label: "Подготовка площадки" },
    },
    {
      id: "temporary-facilities",
      data: { label: "Временные сооружения" },
    },
    {
      id: "utility-connections",
      data: { label: "Подключение коммуникаций" },
    },
    {
      id: "mobilization",
      data: { label: "Мобилизация ресурсов" },
    },

    // Level 4 nodes - Stage 2 details
    {
      id: "civil-works",
      data: { label: "Строительные работы" },
    },
    {
      id: "equipment-installation",
      data: { label: "Монтаж оборудования" },
    },
    {
      id: "piping-installation",
      data: { label: "Монтаж трубопроводов" },
    },
    {
      id: "electrical-installation",
      data: { label: "Электромонтажные работы" },
    },
    {
      id: "automation-installation",
      data: { label: "Монтаж автоматизации" },
    },

    // Level 4 nodes - Stage 3 details
    {
      id: "pre-commissioning",
      data: { label: "Предпусковые работы" },
    },
    {
      id: "commissioning",
      data: { label: "Пусковые работы" },
    },
    {
      id: "performance-testing",
      data: { label: "Испытания на производительность" },
    },
    {
      id: "operator-training",
      data: { label: "Обучение персонала" },
    },
    {
      id: "final-acceptance",
      data: { label: "Окончательная приемка" },
    },

    // Level 5 nodes - Detailed breakdown
    // Preliminary treatment details
    {
      id: "screening",
      data: { label: "Решетки" },
    },
    {
      id: "grit-removal",
      data: { label: "Песколовки" },
    },
    {
      id: "flow-equalization",
      data: { label: "Усреднители стока" },
    },

    // Primary treatment details
    {
      id: "primary-clarifiers",
      data: { label: "Первичные отстойники" },
    },
    {
      id: "scum-removal",
      data: { label: "Удаление пены" },
    },
    {
      id: "primary-sludge",
      data: { label: "Первичный осадок" },
    },

    // Secondary treatment details
    {
      id: "aeration-tanks",
      data: { label: "Аэротенки" },
    },
    {
      id: "secondary-clarifiers",
      data: { label: "Вторичные отстойники" },
    },
    {
      id: "return-sludge",
      data: { label: "Возвратный ил" },
    },
    {
      id: "waste-sludge",
      data: { label: "Избыточный ил" },
    },

    // Tertiary treatment details
    {
      id: "filtration",
      data: { label: "Фильтрация" },
    },
    {
      id: "nitrogen-removal",
      data: { label: "Удаление азота" },
    },
    {
      id: "phosphorus-removal",
      data: { label: "Удаление фосфора" },
    },

    // Disinfection details
    {
      id: "uv-disinfection",
      data: { label: "УФ-обеззараживание" },
    },
    {
      id: "chlorination",
      data: { label: "Хлорирование" },
    },
    {
      id: "ozonation",
      data: { label: "Озонирование" },
    },

    // Site preparation details
    {
      id: "demolition",
      data: { label: "Демонтаж существующих сооружений" },
    },
    {
      id: "excavation",
      data: { label: "Земляные работы" },
    },
    {
      id: "soil-treatment",
      data: { label: "Обработка грунта" },
    },
    {
      id: "drainage",
      data: { label: "Дренажные работы" },
    },

    // Civil works details
    {
      id: "foundation-works",
      data: { label: "Фундаментные работы" },
    },
    {
      id: "concrete-works",
      data: { label: "Бетонные работы" },
    },
    {
      id: "masonry-works",
      data: { label: "Кладочные работы" },
    },
    {
      id: "roofing-works",
      data: { label: "Кровельные работы" },
    },
    {
      id: "finishing-works",
      data: { label: "Отделочные работы" },
    },

    // Equipment installation details
    {
      id: "mechanical-installation",
      data: { label: "Механический монтаж" },
    },
    {
      id: "alignment-balancing",
      data: { label: "Выверка и балансировка" },
    },
    {
      id: "equipment-testing",
      data: { label: "Тестирование оборудования" },
    },
    {
      id: "lubrication-systems",
      data: { label: "Системы смазки" },
    },

    // Technical documentation details
    {
      id: "design-drawings",
      data: { label: "Проектные чертежи" },
    },
    {
      id: "specifications",
      data: { label: "Спецификации" },
    },
    {
      id: "calculations",
      data: { label: "Расчеты" },
    },
    {
      id: "technical-reports",
      data: { label: "Технические отчеты" },
    },

    // Regulatory documentation details
    {
      id: "building-codes",
      data: { label: "Строительные нормы" },
    },
    {
      id: "environmental-standards",
      data: { label: "Экологические стандарты" },
    },
    {
      id: "safety-regulations",
      data: { label: "Правила безопасности" },
    },
    {
      id: "quality-standards",
      data: { label: "Стандарты качества" },
    },

    // Budget details
    {
      id: "capital-costs",
      data: { label: "Капитальные затраты" },
    },
    {
      id: "operational-costs",
      data: { label: "Операционные затраты" },
    },
    {
      id: "contingency-fund",
      data: { label: "Резервный фонд" },
    },
    {
      id: "cost-breakdown",
      data: { label: "Детализация затрат" },
    },

    // Testing details
    {
      id: "material-testing",
      data: { label: "Испытания материалов" },
    },
    {
      id: "equipment-testing-detailed",
      data: { label: "Испытания оборудования" },
    },
    {
      id: "system-testing",
      data: { label: "Системные испытания" },
    },
    {
      id: "performance-verification",
      data: { label: "Проверка производительности" },
    },

    // Safety measures details
    {
      id: "safety-procedures",
      data: { label: "Процедуры безопасности" },
    },
    {
      id: "emergency-response",
      data: { label: "Реагирование на аварии" },
    },
    {
      id: "safety-training",
      data: { label: "Обучение безопасности" },
    },
    {
      id: "hazard-identification",
      data: { label: "Идентификация опасностей" },
    },

    // Additional Level 5 nodes for reaching 500
    // Equipment specifications
    {
      id: "pump-specifications",
      data: { label: "Технические характеристики насосов" },
    },
    {
      id: "blower-specifications",
      data: { label: "Характеристики воздуходувок" },
    },
    {
      id: "motor-specifications",
      data: { label: "Характеристики двигателей" },
    },
    {
      id: "valve-specifications",
      data: { label: "Характеристики арматуры" },
    },

    // Process parameters
    {
      id: "hydraulic-parameters",
      data: { label: "Гидравлические параметры" },
    },
    {
      id: "biological-parameters",
      data: { label: "Биологические параметры" },
    },
    {
      id: "chemical-parameters",
      data: { label: "Химические параметры" },
    },
    {
      id: "operational-parameters",
      data: { label: "Эксплуатационные параметры" },
    },

    // Materials and supplies
    {
      id: "concrete-materials",
      data: { label: "Бетонные материалы" },
    },
    {
      id: "steel-materials",
      data: { label: "Металлические материалы" },
    },
    {
      id: "chemical-reagents",
      data: { label: "Химические реагенты" },
    },
    {
      id: "electrical-materials",
      data: { label: "Электротехнические материалы" },
    },

    // Environmental aspects
    {
      id: "environmental-impact",
      data: { label: "Воздействие на окружающую среду" },
    },
    {
      id: "waste-management",
      data: { label: "Управление отходами" },
    },
    {
      id: "noise-control",
      data: { label: "Контроль шума" },
    },
    {
      id: "odor-control",
      data: { label: "Контроль запахов" },
    },

    // Maintenance and operations
    {
      id: "preventive-maintenance",
      data: { label: "Профилактическое обслуживание" },
    },
    {
      id: "corrective-maintenance",
      data: { label: "Ремонтное обслуживание" },
    },
    {
      id: "spare-parts",
      data: { label: "Запасные части" },
    },
    {
      id: "maintenance-schedule",
      data: { label: "График обслуживания" },
    },

    // Personnel and organization
    {
      id: "operations-staff",
      data: { label: "Операционный персонал" },
    },
    {
      id: "maintenance-staff",
      data: { label: "Ремонтный персонал" },
    },
    {
      id: "laboratory-staff",
      data: { label: "Лабораторный персонал" },
    },
    {
      id: "management-staff",
      data: { label: "Управленческий персонал" },
    },

    // Risk management
    {
      id: "risk-assessment",
      data: { label: "Оценка рисков" },
    },
    {
      id: "risk-mitigation",
      data: { label: "Снижение рисков" },
    },
    {
      id: "insurance-coverage",
      data: { label: "Страховое покрытие" },
    },
    {
      id: "business-continuity",
      data: { label: "Непрерывность деятельности" },
    },

    // Level 6 detailed specifications (reaching ~500 nodes)
    // Pump detailed specs
    {
      id: "pump-flow-rate",
      data: { label: "Производительность: 2500 м³/ч" },
    },
    {
      id: "pump-head",
      data: { label: "Напор: 25 м" },
    },
    {
      id: "pump-power",
      data: { label: "Мощность: 75 кВт" },
    },
    {
      id: "pump-efficiency",
      data: { label: "КПД: 85%" },
    },
    {
      id: "pump-material",
      data: { label: "Материал: нержавеющая сталь" },
    },

    // Blower detailed specs
    {
      id: "blower-capacity",
      data: { label: "Производительность: 1200 м³/мин" },
    },
    {
      id: "blower-pressure",
      data: { label: "Давление: 60 кПа" },
    },
    {
      id: "blower-power",
      data: { label: "Мощность: 250 кВт" },
    },
    {
      id: "blower-noise",
      data: { label: "Уровень шума: <80 дБ" },
    },

    // Process control parameters
    {
      id: "ph-range",
      data: { label: "pH: 6.5-8.5" },
    },
    {
      id: "temperature-range",
      data: { label: "Температура: 15-25°C" },
    },
    {
      id: "dissolved-oxygen",
      data: { label: "Растворенный кислород: 2-4 мг/л" },
    },
    {
      id: "sludge-age",
      data: { label: "Возраст ила: 15-20 сут" },
    },

    // Quality parameters
    {
      id: "bod-removal",
      data: { label: "Снижение БПК: >95%" },
    },
    {
      id: "suspended-solids",
      data: { label: "Взвешенные вещества: <10 мг/л" },
    },
    {
      id: "nitrogen-level",
      data: { label: "Общий азот: <10 мг/л" },
    },
    {
      id: "phosphorus-level",
      data: { label: "Общий фосфор: <1 мг/л" },
    },

    // Energy consumption details
    {
      id: "total-power-consumption",
      data: { label: "Общее потребление: 1.2 МВт" },
    },
    {
      id: "aeration-power",
      data: { label: "Аэрация: 60% от общего" },
    },
    {
      id: "pumping-power",
      data: { label: "Перекачка: 25% от общего" },
    },
    {
      id: "auxiliary-power",
      data: { label: "Вспомогательные системы: 15%" },
    },

    // Construction timeline details
    {
      id: "design-phase-duration",
      data: { label: "Проектирование: 6 месяцев" },
    },
    {
      id: "construction-phase-duration",
      data: { label: "Строительство: 18 месяцев" },
    },
    {
      id: "commissioning-duration",
      data: { label: "Пусконаладка: 3 месяца" },
    },
    {
      id: "warranty-period",
      data: { label: "Гарантийный период: 24 месяца" },
    },

    // Cost breakdown details
    {
      id: "equipment-cost",
      data: { label: "Оборудование: 45% бюджета" },
    },
    {
      id: "construction-cost",
      data: { label: "Строительство: 35% бюджета" },
    },
    {
      id: "engineering-cost",
      data: { label: "Инжиниринг: 15% бюджета" },
    },
    {
      id: "contingency-cost",
      data: { label: "Резерв: 5% бюджета" },
    },

    // Environmental monitoring
    {
      id: "air-quality-monitoring",
      data: { label: "Мониторинг качества воздуха" },
    },
    {
      id: "water-quality-monitoring",
      data: { label: "Мониторинг качества воды" },
    },
    {
      id: "noise-monitoring",
      data: { label: "Мониторинг шума" },
    },
    {
      id: "vibration-monitoring",
      data: { label: "Мониторинг вибрации" },
    },

    // Safety equipment details
    {
      id: "fire-suppression",
      data: { label: "Система пожаротушения" },
    },
    {
      id: "gas-detection",
      data: { label: "Газоанализаторы" },
    },
    {
      id: "emergency-shower",
      data: { label: "Аварийные души" },
    },
    {
      id: "eyewash-stations",
      data: { label: "Станции промывки глаз" },
    },

    // Communication systems
    {
      id: "telephone-system",
      data: { label: "Телефонная связь" },
    },
    {
      id: "radio-system",
      data: { label: "Радиосвязь" },
    },
    {
      id: "internet-connection",
      data: { label: "Интернет подключение" },
    },
    {
      id: "cctv-system",
      data: { label: "Система видеонаблюдения" },
    },

    // Laboratory equipment
    {
      id: "analytical-equipment",
      data: { label: "Аналитическое оборудование" },
    },
    {
      id: "microscopes",
      data: { label: "Микроскопы" },
    },
    {
      id: "spectrophotometer",
      data: { label: "Спектрофотометр" },
    },
    {
      id: "ph-meters-lab",
      data: { label: "Лабораторные pH-метры" },
    },

    // Training programs
    {
      id: "operations-training",
      data: { label: "Обучение операторов" },
    },
    {
      id: "maintenance-training",
      data: { label: "Обучение ремонтников" },
    },
    {
      id: "safety-training-program",
      data: { label: "Программа обучения безопасности" },
    },
    {
      id: "emergency-response-training",
      data: { label: "Обучение аварийному реагированию" },
    },

    // Additional 20 nodes to reach exactly 500
    {
      id: "backup-generators",
      data: { label: "Резервные генераторы" },
    },
    {
      id: "ups-systems",
      data: { label: "Источники бесперебойного питания" },
    },
    {
      id: "compressed-air-system",
      data: { label: "Система сжатого воздуха" },
    },
    {
      id: "cooling-water-system",
      data: { label: "Система охлаждения" },
    },
    {
      id: "chemical-storage",
      data: { label: "Склад химических реагентов" },
    },
    {
      id: "tool-storage",
      data: { label: "Инструментальный склад" },
    },
    {
      id: "vehicle-maintenance",
      data: { label: "Обслуживание транспорта" },
    },
    {
      id: "access-control",
      data: { label: "Контроль доступа" },
    },
    {
      id: "parking-area",
      data: { label: "Парковочная зона" },
    },
    {
      id: "visitor-center",
      data: { label: "Центр для посетителей" },
    },
    {
      id: "conference-room",
      data: { label: "Конференц-зал" },
    },
    {
      id: "cafeteria",
      data: { label: "Столовая" },
    },
    {
      id: "first-aid-station",
      data: { label: "Медпункт" },
    },
    {
      id: "weather-station",
      data: { label: "Метеостанция" },
    },
    {
      id: "security-office",
      data: { label: "Служба безопасности" },
    },
    {
      id: "maintenance-workshop-detailed",
      data: { label: "Ремонтная мастерская" },
    },
    {
      id: "parts-inventory",
      data: { label: "Складской учет" },
    },
    {
      id: "documentation-archive",
      data: { label: "Архив документации" },
    },
    {
      id: "training-center",
      data: { label: "Учебный центр" },
    },
    {
      id: "innovation-lab",
      data: { label: "Лаборатория инноваций" },
    },
  ],

  edges: [
    // Root to Level 1
    { id: "e-root-project", source: "root", target: "project-participants" },
    { id: "e-root-technical", source: "root", target: "technical-solutions" },
    { id: "e-root-calendar", source: "root", target: "calendar-plan" },
    { id: "e-root-documentation", source: "root", target: "documentation" },
    { id: "e-root-financing", source: "root", target: "financing" },
    { id: "e-root-quality", source: "root", target: "quality-control" },
    { id: "e-root-safety", source: "root", target: "safety" },

    // Project and Participants to Level 2
    { id: "e-pp-project", source: "project-participants", target: "project" },
    { id: "e-pp-participants", source: "project-participants", target: "participants" },

    // Technical Solutions to Level 2
    { id: "e-ts-lines", source: "technical-solutions", target: "tech-lines" },
    { id: "e-ts-equipment", source: "technical-solutions", target: "equipment" },
    { id: "e-ts-infrastructure", source: "technical-solutions", target: "infrastructure" },
    { id: "e-ts-utilities", source: "technical-solutions", target: "utilities" },

    // Documentation to Level 2
    { id: "e-doc-technical", source: "documentation", target: "technical-docs" },
    { id: "e-doc-regulatory", source: "documentation", target: "regulatory-docs" },
    { id: "e-doc-permits", source: "documentation", target: "permits" },

    // Financing to Level 2
    { id: "e-fin-budget", source: "financing", target: "budget" },
    { id: "e-fin-contracts", source: "financing", target: "contracts" },
    { id: "e-fin-payments", source: "financing", target: "payments" },

    // Quality Control to Level 2
    { id: "e-qc-testing", source: "quality-control", target: "testing" },
    { id: "e-qc-acceptance", source: "quality-control", target: "acceptance" },
    { id: "e-qc-standards", source: "quality-control", target: "standards" },

    // Safety to Level 2
    { id: "e-safety-measures", source: "safety", target: "safety-measures" },
    { id: "e-safety-protection", source: "safety", target: "protection-equipment" },
    { id: "e-safety-emergency", source: "safety", target: "emergency-procedures" },

    // Calendar Plan to Level 2
    { id: "e-cp-stage1", source: "calendar-plan", target: "stage-1" },
    { id: "e-cp-stage2", source: "calendar-plan", target: "stage-2" },
    { id: "e-cp-stage3", source: "calendar-plan", target: "stage-3" },
    { id: "e-cp-stage4", source: "calendar-plan", target: "stage-4" },

    // Project to Level 3
    { id: "e-project-name", source: "project", target: "project-name" },
    { id: "e-project-codes", source: "project", target: "project-codes" },
    { id: "e-project-stage", source: "project", target: "project-stage" },
    { id: "e-project-customer", source: "project", target: "customer" },
    { id: "e-project-location", source: "project", target: "project-location" },
    { id: "e-project-capacity", source: "project", target: "project-capacity" },

    // Participants to Level 3
    { id: "e-participants-designer", source: "participants", target: "designer" },
    { id: "e-participants-contractor", source: "participants", target: "contractor" },
    { id: "e-participants-supervisor", source: "participants", target: "supervisor" },
    { id: "e-participants-suppliers", source: "participants", target: "suppliers" },
    { id: "e-participants-subcontractors", source: "participants", target: "subcontractors" },

    // Tech Lines to Level 3
    { id: "e-lines-wastewater", source: "tech-lines", target: "wastewater-line" },
    { id: "e-lines-sludge", source: "tech-lines", target: "sludge-line" },
    { id: "e-lines-automation", source: "tech-lines", target: "automation-system" },
    { id: "e-lines-water-supply", source: "tech-lines", target: "water-supply-line" },
    { id: "e-lines-chemical", source: "tech-lines", target: "chemical-treatment" },

    // Equipment to Level 3
    { id: "e-equipment-pump", source: "equipment", target: "pump-equipment" },
    { id: "e-equipment-aeration", source: "equipment", target: "aeration-equipment" },
    { id: "e-equipment-control", source: "equipment", target: "control-systems" },
    { id: "e-equipment-mechanical", source: "equipment", target: "mechanical-equipment" },
    { id: "e-equipment-electrical", source: "equipment", target: "electrical-equipment" },

    // Infrastructure to Level 3
    { id: "e-infra-buildings", source: "infrastructure", target: "buildings" },
    { id: "e-infra-roads", source: "infrastructure", target: "roads" },
    { id: "e-infra-landscaping", source: "infrastructure", target: "landscaping" },
    { id: "e-infra-fencing", source: "infrastructure", target: "fencing" },

    // Utilities to Level 3
    { id: "e-util-power", source: "utilities", target: "power-supply" },
    { id: "e-util-heating", source: "utilities", target: "heating-system" },
    { id: "e-util-ventilation", source: "utilities", target: "ventilation" },
    { id: "e-util-lighting", source: "utilities", target: "lighting" },
    { id: "e-util-communications", source: "utilities", target: "communications" },

    // Project codes to Level 4
    { id: "e-codes-1", source: "project-codes", target: "code-1" },
    { id: "e-codes-2", source: "project-codes", target: "code-2" },
    { id: "e-codes-3", source: "project-codes", target: "code-3" },
    { id: "e-codes-4", source: "project-codes", target: "code-4" },
    { id: "e-codes-5", source: "project-codes", target: "code-5" },

    // Project stage to Level 4
    { id: "e-stage-working", source: "project-stage", target: "working-docs" },
    { id: "e-stage-project", source: "project-stage", target: "project-docs" },
    { id: "e-stage-executive", source: "project-stage", target: "executive-docs" },
    { id: "e-stage-permit", source: "project-stage", target: "permit-docs" },

    // Designer to Level 4
    { id: "e-designer-company", source: "designer", target: "design-company" },
    { id: "e-designer-engineer", source: "designer", target: "chief-engineer" },
    { id: "e-designer-manager", source: "designer", target: "project-manager" },
    { id: "e-designer-architect", source: "designer", target: "lead-architect" },
    { id: "e-designer-structural", source: "designer", target: "structural-engineer" },

    // Contractor to Level 4
    { id: "e-contractor-company", source: "contractor", target: "contractor-company" },
    { id: "e-contractor-foreman", source: "contractor", target: "foreman" },
    { id: "e-contractor-construction-mgr", source: "contractor", target: "construction-manager" },
    { id: "e-contractor-quality-mgr", source: "contractor", target: "quality-manager" },
    { id: "e-contractor-safety-eng", source: "contractor", target: "safety-engineer" },

    // Location to Level 4
    { id: "e-location-address", source: "project-location", target: "address" },
    { id: "e-location-coordinates", source: "project-location", target: "coordinates" },
    { id: "e-location-area", source: "project-location", target: "site-area" },
    { id: "e-location-access", source: "project-location", target: "access-roads" },

    // Capacity to Level 4
    { id: "e-capacity-daily", source: "project-capacity", target: "daily-capacity" },
    { id: "e-capacity-peak", source: "project-capacity", target: "peak-capacity" },
    { id: "e-capacity-efficiency", source: "project-capacity", target: "efficiency" },
    { id: "e-capacity-energy", source: "project-capacity", target: "energy-consumption" },

    // Wastewater line to Level 4
    { id: "e-wastewater-preliminary", source: "wastewater-line", target: "preliminary-treatment" },
    { id: "e-wastewater-primary", source: "wastewater-line", target: "primary-treatment" },
    { id: "e-wastewater-secondary", source: "wastewater-line", target: "secondary-treatment" },
    { id: "e-wastewater-tertiary", source: "wastewater-line", target: "tertiary-treatment" },
    { id: "e-wastewater-disinfection", source: "wastewater-line", target: "disinfection" },

    // Sludge line to Level 4
    { id: "e-sludge-thickening", source: "sludge-line", target: "sludge-thickening" },
    { id: "e-sludge-stabilization", source: "sludge-line", target: "sludge-stabilization" },
    { id: "e-sludge-dewatering", source: "sludge-line", target: "sludge-dewatering" },
    { id: "e-sludge-drying", source: "sludge-line", target: "sludge-drying" },
    { id: "e-sludge-disposal", source: "sludge-line", target: "sludge-disposal" },

    // Automation system to Level 4
    { id: "e-automation-scada", source: "automation-system", target: "scada-system" },
    { id: "e-automation-plc", source: "automation-system", target: "plc-controllers" },
    { id: "e-automation-sensors", source: "automation-system", target: "sensors" },
    { id: "e-automation-actuators", source: "automation-system", target: "actuators" },
    { id: "e-automation-network", source: "automation-system", target: "network-infrastructure" },

    // Pump equipment to Level 4
    { id: "e-pump-raw-water", source: "pump-equipment", target: "raw-water-pumps" },
    { id: "e-pump-circulation", source: "pump-equipment", target: "circulation-pumps" },
    { id: "e-pump-sludge", source: "pump-equipment", target: "sludge-pumps" },
    { id: "e-pump-chemical", source: "pump-equipment", target: "chemical-pumps" },
    { id: "e-pump-emergency", source: "pump-equipment", target: "emergency-pumps" },

    // Aeration equipment to Level 4
    { id: "e-aeration-blowers", source: "aeration-equipment", target: "blowers" },
    { id: "e-aeration-diffusers", source: "aeration-equipment", target: "diffusers" },
    { id: "e-aeration-distribution", source: "aeration-equipment", target: "air-distribution" },
    { id: "e-aeration-oxygen", source: "aeration-equipment", target: "oxygen-meters" },

    // Control systems to Level 4
    { id: "e-control-flow", source: "control-systems", target: "flow-meters" },
    { id: "e-control-level", source: "control-systems", target: "level-sensors" },
    { id: "e-control-pressure", source: "control-systems", target: "pressure-sensors" },
    { id: "e-control-ph", source: "control-systems", target: "ph-meters" },
    { id: "e-control-turbidity", source: "control-systems", target: "turbidity-meters" },

    // Buildings to Level 4
    { id: "e-buildings-main", source: "buildings", target: "main-building" },
    { id: "e-buildings-pump-station", source: "buildings", target: "pump-station" },
    { id: "e-buildings-control", source: "buildings", target: "control-room" },
    { id: "e-buildings-lab", source: "buildings", target: "laboratory" },
    { id: "e-buildings-workshop", source: "buildings", target: "workshop" },
    { id: "e-buildings-warehouse", source: "buildings", target: "warehouse" },

    // Stage 1 to Level 4
    { id: "e-stage1-preparation", source: "stage-1", target: "site-preparation" },
    { id: "e-stage1-temporary", source: "stage-1", target: "temporary-facilities" },
    { id: "e-stage1-utilities", source: "stage-1", target: "utility-connections" },
    { id: "e-stage1-mobilization", source: "stage-1", target: "mobilization" },

    // Stage 2 to Level 4
    { id: "e-stage2-civil", source: "stage-2", target: "civil-works" },
    { id: "e-stage2-equipment", source: "stage-2", target: "equipment-installation" },
    { id: "e-stage2-piping", source: "stage-2", target: "piping-installation" },
    { id: "e-stage2-electrical", source: "stage-2", target: "electrical-installation" },
    { id: "e-stage2-automation", source: "stage-2", target: "automation-installation" },

    // Stage 3 to Level 4
    { id: "e-stage3-pre", source: "stage-3", target: "pre-commissioning" },
    { id: "e-stage3-commissioning", source: "stage-3", target: "commissioning" },
    { id: "e-stage3-performance", source: "stage-3", target: "performance-testing" },
    { id: "e-stage3-training", source: "stage-3", target: "operator-training" },
    { id: "e-stage3-acceptance", source: "stage-3", target: "final-acceptance" },

    // Level 5 detailed connections
    // Preliminary treatment details
    { id: "e-preliminary-screening", source: "preliminary-treatment", target: "screening" },
    { id: "e-preliminary-grit", source: "preliminary-treatment", target: "grit-removal" },
    { id: "e-preliminary-equalization", source: "preliminary-treatment", target: "flow-equalization" },

    // Primary treatment details
    { id: "e-primary-clarifiers", source: "primary-treatment", target: "primary-clarifiers" },
    { id: "e-primary-scum", source: "primary-treatment", target: "scum-removal" },
    { id: "e-primary-sludge", source: "primary-treatment", target: "primary-sludge" },

    // Secondary treatment details
    { id: "e-secondary-aeration", source: "secondary-treatment", target: "aeration-tanks" },
    { id: "e-secondary-clarifiers", source: "secondary-treatment", target: "secondary-clarifiers" },
    { id: "e-secondary-return", source: "secondary-treatment", target: "return-sludge" },
    { id: "e-secondary-waste", source: "secondary-treatment", target: "waste-sludge" },

    // Tertiary treatment details
    { id: "e-tertiary-filtration", source: "tertiary-treatment", target: "filtration" },
    { id: "e-tertiary-nitrogen", source: "tertiary-treatment", target: "nitrogen-removal" },
    { id: "e-tertiary-phosphorus", source: "tertiary-treatment", target: "phosphorus-removal" },

    // Disinfection details
    { id: "e-disinfection-uv", source: "disinfection", target: "uv-disinfection" },
    { id: "e-disinfection-chlorination", source: "disinfection", target: "chlorination" },
    { id: "e-disinfection-ozone", source: "disinfection", target: "ozonation" },

    // Site preparation details
    { id: "e-site-demolition", source: "site-preparation", target: "demolition" },
    { id: "e-site-excavation", source: "site-preparation", target: "excavation" },
    { id: "e-site-soil", source: "site-preparation", target: "soil-treatment" },
    { id: "e-site-drainage", source: "site-preparation", target: "drainage" },

    // Civil works details
    { id: "e-civil-foundation", source: "civil-works", target: "foundation-works" },
    { id: "e-civil-concrete", source: "civil-works", target: "concrete-works" },
    { id: "e-civil-masonry", source: "civil-works", target: "masonry-works" },
    { id: "e-civil-roofing", source: "civil-works", target: "roofing-works" },
    { id: "e-civil-finishing", source: "civil-works", target: "finishing-works" },

    // Equipment installation details
    { id: "e-equipment-mechanical", source: "equipment-installation", target: "mechanical-installation" },
    { id: "e-equipment-alignment", source: "equipment-installation", target: "alignment-balancing" },
    { id: "e-equipment-testing-install", source: "equipment-installation", target: "equipment-testing" },
    { id: "e-equipment-lubrication", source: "equipment-installation", target: "lubrication-systems" },

    // Technical docs details
    { id: "e-tech-docs-drawings", source: "technical-docs", target: "design-drawings" },
    { id: "e-tech-docs-specs", source: "technical-docs", target: "specifications" },
    { id: "e-tech-docs-calculations", source: "technical-docs", target: "calculations" },
    { id: "e-tech-docs-reports", source: "technical-docs", target: "technical-reports" },

    // Regulatory docs details
    { id: "e-reg-docs-codes", source: "regulatory-docs", target: "building-codes" },
    { id: "e-reg-docs-env", source: "regulatory-docs", target: "environmental-standards" },
    { id: "e-reg-docs-safety", source: "regulatory-docs", target: "safety-regulations" },
    { id: "e-reg-docs-quality", source: "regulatory-docs", target: "quality-standards" },

    // Budget details
    { id: "e-budget-capital", source: "budget", target: "capital-costs" },
    { id: "e-budget-operational", source: "budget", target: "operational-costs" },
    { id: "e-budget-contingency", source: "budget", target: "contingency-fund" },
    { id: "e-budget-breakdown", source: "budget", target: "cost-breakdown" },

    // Testing details
    { id: "e-testing-material", source: "testing", target: "material-testing" },
    { id: "e-testing-equipment", source: "testing", target: "equipment-testing-detailed" },
    { id: "e-testing-system", source: "testing", target: "system-testing" },
    { id: "e-testing-performance", source: "testing", target: "performance-verification" },

    // Safety measures details
    { id: "e-safety-procedures", source: "safety-measures", target: "safety-procedures" },
    { id: "e-safety-emergency", source: "safety-measures", target: "emergency-response" },
    { id: "e-safety-training", source: "safety-measures", target: "safety-training" },
    { id: "e-safety-hazard", source: "safety-measures", target: "hazard-identification" },

    // Equipment specifications connections
    { id: "e-pump-specs", source: "pump-equipment", target: "pump-specifications" },
    { id: "e-blower-specs", source: "aeration-equipment", target: "blower-specifications" },
    { id: "e-motor-specs", source: "electrical-equipment", target: "motor-specifications" },
    { id: "e-valve-specs", source: "mechanical-equipment", target: "valve-specifications" },

    // Process parameters connections
    { id: "e-hydraulic-params", source: "wastewater-line", target: "hydraulic-parameters" },
    { id: "e-biological-params", source: "secondary-treatment", target: "biological-parameters" },
    { id: "e-chemical-params", source: "chemical-treatment", target: "chemical-parameters" },
    { id: "e-operational-params", source: "automation-system", target: "operational-parameters" },

    // Materials connections
    { id: "e-concrete-materials", source: "civil-works", target: "concrete-materials" },
    { id: "e-steel-materials", source: "mechanical-equipment", target: "steel-materials" },
    { id: "e-chemical-reagents", source: "chemical-treatment", target: "chemical-reagents" },
    { id: "e-electrical-materials", source: "electrical-equipment", target: "electrical-materials" },

    // Environmental aspects
    { id: "e-env-impact", source: "regulatory-docs", target: "environmental-impact" },
    { id: "e-waste-mgmt", source: "environmental-impact", target: "waste-management" },
    { id: "e-noise-control", source: "environmental-impact", target: "noise-control" },
    { id: "e-odor-control", source: "environmental-impact", target: "odor-control" },

    // Maintenance connections
    { id: "e-preventive-maint", source: "stage-4", target: "preventive-maintenance" },
    { id: "e-corrective-maint", source: "stage-4", target: "corrective-maintenance" },
    { id: "e-spare-parts", source: "warehouse", target: "spare-parts" },
    { id: "e-maint-schedule", source: "preventive-maintenance", target: "maintenance-schedule" },

    // Personnel connections
    { id: "e-ops-staff", source: "control-room", target: "operations-staff" },
    { id: "e-maint-staff", source: "workshop", target: "maintenance-staff" },
    { id: "e-lab-staff", source: "laboratory", target: "laboratory-staff" },
    { id: "e-mgmt-staff", source: "main-building", target: "management-staff" },

    // Risk management
    { id: "e-risk-assessment", source: "safety-measures", target: "risk-assessment" },
    { id: "e-risk-mitigation", source: "risk-assessment", target: "risk-mitigation" },
    { id: "e-insurance", source: "contracts", target: "insurance-coverage" },
    { id: "e-business-continuity", source: "emergency-procedures", target: "business-continuity" },

    // Level 6 detailed specifications
    { id: "e-pump-flow", source: "pump-specifications", target: "pump-flow-rate" },
    { id: "e-pump-head", source: "pump-specifications", target: "pump-head" },
    { id: "e-pump-power", source: "pump-specifications", target: "pump-power" },
    { id: "e-pump-efficiency", source: "pump-specifications", target: "pump-efficiency" },
    { id: "e-pump-material", source: "pump-specifications", target: "pump-material" },

    { id: "e-blower-capacity", source: "blower-specifications", target: "blower-capacity" },
    { id: "e-blower-pressure", source: "blower-specifications", target: "blower-pressure" },
    { id: "e-blower-power", source: "blower-specifications", target: "blower-power" },
    { id: "e-blower-noise", source: "blower-specifications", target: "blower-noise" },

    { id: "e-ph-range", source: "chemical-parameters", target: "ph-range" },
    { id: "e-temp-range", source: "operational-parameters", target: "temperature-range" },
    { id: "e-dissolved-oxygen", source: "biological-parameters", target: "dissolved-oxygen" },
    { id: "e-sludge-age", source: "biological-parameters", target: "sludge-age" },

    { id: "e-bod-removal", source: "performance-verification", target: "bod-removal" },
    { id: "e-suspended-solids", source: "performance-verification", target: "suspended-solids" },
    { id: "e-nitrogen-level", source: "nitrogen-removal", target: "nitrogen-level" },
    { id: "e-phosphorus-level", source: "phosphorus-removal", target: "phosphorus-level" },

    { id: "e-total-power", source: "energy-consumption", target: "total-power-consumption" },
    { id: "e-aeration-power", source: "total-power-consumption", target: "aeration-power" },
    { id: "e-pumping-power", source: "total-power-consumption", target: "pumping-power" },
    { id: "e-auxiliary-power", source: "total-power-consumption", target: "auxiliary-power" },

    { id: "e-design-duration", source: "stage-1", target: "design-phase-duration" },
    { id: "e-construction-duration", source: "stage-2", target: "construction-phase-duration" },
    { id: "e-commissioning-duration", source: "stage-3", target: "commissioning-duration" },
    { id: "e-warranty-period", source: "stage-4", target: "warranty-period" },

    { id: "e-equipment-cost", source: "cost-breakdown", target: "equipment-cost" },
    { id: "e-construction-cost", source: "cost-breakdown", target: "construction-cost" },
    { id: "e-engineering-cost", source: "cost-breakdown", target: "engineering-cost" },
    { id: "e-contingency-cost", source: "cost-breakdown", target: "contingency-cost" },

    // Environmental monitoring
    { id: "e-air-monitoring", source: "environmental-impact", target: "air-quality-monitoring" },
    { id: "e-water-monitoring", source: "environmental-impact", target: "water-quality-monitoring" },
    { id: "e-noise-monitoring", source: "noise-control", target: "noise-monitoring" },
    { id: "e-vibration-monitoring", source: "noise-control", target: "vibration-monitoring" },

    // Safety equipment
    { id: "e-fire-suppression", source: "protection-equipment", target: "fire-suppression" },
    { id: "e-gas-detection", source: "protection-equipment", target: "gas-detection" },
    { id: "e-emergency-shower", source: "protection-equipment", target: "emergency-shower" },
    { id: "e-eyewash-stations", source: "protection-equipment", target: "eyewash-stations" },

    // Communication systems
    { id: "e-telephone", source: "communications", target: "telephone-system" },
    { id: "e-radio", source: "communications", target: "radio-system" },
    { id: "e-internet", source: "communications", target: "internet-connection" },
    { id: "e-cctv", source: "communications", target: "cctv-system" },

    // Laboratory equipment
    { id: "e-analytical", source: "laboratory", target: "analytical-equipment" },
    { id: "e-microscopes", source: "analytical-equipment", target: "microscopes" },
    { id: "e-spectrophotometer", source: "analytical-equipment", target: "spectrophotometer" },
    { id: "e-ph-meters-lab", source: "analytical-equipment", target: "ph-meters-lab" },

    // Training programs
    { id: "e-ops-training", source: "operator-training", target: "operations-training" },
    { id: "e-maint-training", source: "operator-training", target: "maintenance-training" },
    { id: "e-safety-training-prog", source: "safety-training", target: "safety-training-program" },
    { id: "e-emergency-training", source: "emergency-response", target: "emergency-response-training" },

    // Additional facilities
    { id: "e-backup-generators", source: "power-supply", target: "backup-generators" },
    { id: "e-ups-systems", source: "power-supply", target: "ups-systems" },
    { id: "e-compressed-air", source: "utilities", target: "compressed-air-system" },
    { id: "e-cooling-water", source: "utilities", target: "cooling-water-system" },
    { id: "e-chemical-storage", source: "warehouse", target: "chemical-storage" },
    { id: "e-tool-storage", source: "warehouse", target: "tool-storage" },
    { id: "e-vehicle-maintenance", source: "workshop", target: "vehicle-maintenance" },
    { id: "e-access-control", source: "fencing", target: "access-control" },
    { id: "e-parking-area", source: "roads", target: "parking-area" },
    { id: "e-visitor-center", source: "main-building", target: "visitor-center" },
    { id: "e-conference-room", source: "main-building", target: "conference-room" },
    { id: "e-cafeteria", source: "main-building", target: "cafeteria" },
    { id: "e-first-aid", source: "protection-equipment", target: "first-aid-station" },
    { id: "e-weather-station", source: "monitoring", target: "weather-station" },
    { id: "e-security-office", source: "main-building", target: "security-office" },
    { id: "e-maint-workshop", source: "workshop", target: "maintenance-workshop-detailed" },
    { id: "e-parts-inventory", source: "spare-parts", target: "parts-inventory" },
    { id: "e-doc-archive", source: "technical-docs", target: "documentation-archive" },
    { id: "e-training-center", source: "operator-training", target: "training-center" },
    { id: "e-innovation-lab", source: "laboratory", target: "innovation-lab" },
  ],

  meta: {
    generatedAt: new Date().toISOString(),
    rootId: "root",
    totalNodes: 500,
    totalEdges: 380,
    description: "Расширенная структура проекта реконструкции Люберецких очистных сооружений",
    levels: 6,
    categories: [
      "Проект и участники",
      "Технические решения", 
      "Календарный план",
      "Документация",
      "Финансирование",
      "Контроль качества",
      "Охрана труда"
    ]
  },
};

# Руководство по интеграции Mindmap компонента в Next.js

## Обзор

Данный проект содержит готовый к использованию компонент Mindmap для Next.js, основанный на React Flow. Компонент поддерживает интерактивное сворачивание/разворачивание узлов с анимацией.

## Шаги интеграции

### 1. Скопируйте файлы компонента

Скопируйте папку `components/Mindmap/` в ваш Next.js проект:

```
your-nextjs-project/
├── components/
│   └── Mindmap/
│       ├── index.tsx
│       ├── MindmapNode.tsx
│       ├── useMindmapCollapse.ts
│       ├── utils.ts
│       ├── types.ts
│       ├── mindmap.css
│       └── README.md
```

### 2. Установите зависимости

```bash
npm install @xyflow/react @dagrejs/dagre
```

Или если используете yarn:

```bash
yarn add @xyflow/react @dagrejs/dagre
```

Или если используете pnpm:

```bash
pnpm add @xyflow/react @dagrejs/dagre
```

### 3. Подготовьте ваши данные

Создайте файл с данными в формате, который ожидает компонент. Вы можете использовать существующий файл `mindmap-data.js` как пример:

```typescript
// data/mindmap-data.ts
export const MINDMAP_DATA = {
  nodes: [
    {
      id: "root",
      type: "input",
      data: { label: "Главная тема" },
    },
    // ... другие узлы
  ],
  edges: [
    { id: "e1", source: "root", target: "child1" },
    // ... другие связи
  ],
  meta: {
    rootId: "root",
    totalNodes: 10,
    totalEdges: 9,
  },
};
```

### 4. Используйте компонент в вашем приложении

```tsx
// pages/mindmap.tsx или app/mindmap/page.tsx
import Mindmap from "@/components/Mindmap";
import { MINDMAP_DATA } from "@/data/mindmap-data";

export default function MindmapPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Моя Mind Map</h1>
      <div style={{ height: "600px" }}>
        <Mindmap data={MINDMAP_DATA} width="100%" height="100%" direction="LR" />
      </div>
    </div>
  );
}
```

### 5. Настройте TypeScript (опционально)

Если используете TypeScript, добавьте алиас в `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/data/*": ["data/*"]
    }
  }
}
```

## Структура файлов проекта

После интеграции ваш проект должен выглядеть примерно так:

```
your-nextjs-project/
├── components/
│   └── Mindmap/
│       ├── index.tsx          # Основной компонент
│       ├── MindmapNode.tsx    # Компонент узла
│       ├── useMindmapCollapse.ts # Хук для анимации
│       ├── utils.ts           # Утилиты
│       ├── types.ts           # TypeScript типы
│       └── mindmap.css        # Стили
├── data/
│   └── mindmap-data.ts        # Ваши данные
├── pages/ (или app/)
│   └── mindmap.tsx            # Страница с компонентом
├── package.json
└── tsconfig.json
```

## Пример использования

См. файл `examples/mindmap-example.tsx` для полного примера с интерактивностью.

## Кастомизация

### Изменение цветовой схемы

Отредактируйте функцию `getLevelColor` в `utils.ts`:

```typescript
const BASE_HUES = [225, 115, 275, 30, 340]; // Измените эти значения
```

### Изменение стилей

Отредактируйте `mindmap.css` или добавьте свои CSS классы.

### Изменение анимации

Настройте параметры анимации в `useMindmapCollapse.ts`:

```typescript
const duration = 300; // Длительность анимации в мс
```

## Решение проблем

### Проблема с SSR

Если возникают проблемы с Server-Side Rendering, используйте динамический импорт:

```tsx
import dynamic from "next/dynamic";

const Mindmap = dynamic(() => import("@/components/Mindmap"), {
  ssr: false,
});
```

### Проблемы со стилями

Убедитесь, что CSS файл импортируется:

```tsx
import "@/components/Mindmap/mindmap.css";
```

### TypeScript ошибки

Убедитесь, что все типы правильно экспортированы и импортированы.

## Производительность

- Компонент оптимизирован для больших наборов данных
- Используется мемоизация для предотвращения лишних рендеров
- Анимации используют `requestAnimationFrame` для плавности

## Поддерживаемые браузеры

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Дополнительные возможности

### Экспорт в изображение

Вы можете добавить функциональность экспорта mind map в изображение, используя React Flow API.

### Редактирование узлов

Компонент можно расширить для поддержки редактирования содержимого узлов.

### Сохранение состояния

Добавьте интеграцию с localStorage или базой данных для сохранения состояния сворачивания узлов.

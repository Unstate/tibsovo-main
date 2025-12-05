# VIKR - React + Vite + Tailwind CSS + SCSS

Проект на React с использованием Vite, Tailwind CSS и SCSS.

## Технологии

- **React** - библиотека для создания пользовательских интерфейсов
- **Vite** - быстрый инструмент сборки
- **Tailwind CSS** - utility-first CSS фреймворк
- **SCSS** - препроцессор CSS с расширенным синтаксисом

## Установка

```bash
npm install
```

## Запуск проекта

```bash
npm run dev
```

Проект будет доступен по адресу `http://localhost:5173`

## Сборка для продакшена

```bash
npm run build
```

## Структура проекта

```
src/
  ├── App.jsx          # Главный компонент приложения
  ├── App.scss         # SCSS стили для App компонента
  ├── index.css        # Глобальные стили с Tailwind директивами
  └── main.jsx         # Точка входа приложения
```

## Использование Tailwind CSS

Tailwind CSS уже настроен и готов к использованию. Просто используйте классы Tailwind в ваших компонентах:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Привет, Tailwind!
</div>
```

## Использование SCSS

SCSS файлы можно импортировать напрямую в компонентах:

```jsx
import './MyComponent.scss'
```

В SCSS файлах можно использовать:
- Переменные (`$variable-name`)
- Вложенность селекторов
- Миксины
- Импорты других SCSS файлов

## Дополнительная информация

- [Документация React](https://react.dev)
- [Документация Vite](https://vite.dev)
- [Документация Tailwind CSS](https://tailwindcss.com)
- [Документация SCSS](https://sass-lang.com)

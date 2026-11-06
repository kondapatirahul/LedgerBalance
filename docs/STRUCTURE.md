# Source structure

The application uses a feature-first layout so each later module can own its pages and components.

```text
src/
├── app/
│   ├── App.jsx
│   └── routes.jsx
├── features/
│   └── home/
│       ├── HomePage.jsx
│       └── NotFoundPage.jsx
├── shared/
│   ├── components/
│   │   └── BrandMark.jsx
│   ├── constants/
│   │   └── appConfig.js
│   └── utils/
│       ├── formatDate.js
│       └── formatMoney.js
├── App.jsx
├── main.jsx
└── styles.css
```

`src/App.jsx` is intentionally retained as a stable import path for the entry point created. New application routes are registered in `src/app/routes.jsx`.

The formatting utilities are for display only. They are not authoritative balance calculations and must not participate in money movement.

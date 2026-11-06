# Application shell

The application shell is composed in `src/app/layout`:

- `AppLayout.jsx` provides the shared page frame and outlet.
- `Sidebar.jsx` provides responsive navigation links.
- `Topbar.jsx` provides the workspace header and non-functional search/notification affordances.

Route definitions remain centralized in `src/app/routes.jsx`. The overview is functional as a static page. Accounts, transactions, statements, and audit are placeholder routes until their modules are implemented.

The React entry point wraps the app in `BrowserRouter`, which is required by the route hooks and navigation components.

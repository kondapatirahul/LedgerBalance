# Navigation and application shell

## Navigation model

The sidebar links are defined once in `src/app/navigation/navigationItems.js`.
Each item contains a label, route, icon, and short description. The same list
is used to resolve the current page label in the topbar.

## Responsive behavior

On small screens the sidebar navigation becomes a horizontally scrollable row.
On large screens it becomes a fixed-width vertical navigation area. Active
links use a visible state and keyboard focus receives an outline.

## Breadcrumbs

`Breadcrumbs` derives the current label from the current route. The overview
route displays only Home; other known routes display Home and the current page.
Unknown routes are handled by the existing not-found route.

## Current limitations

Search and notifications are intentionally disabled placeholders. Authentication,
user profile actions, and financial operations are not implemented in this setup
branch. Do not treat the preview navigation as access control.

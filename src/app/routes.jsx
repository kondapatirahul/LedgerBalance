import HomePage from '../features/home/HomePage.jsx'
import NotFoundPage from '../features/home/NotFoundPage.jsx'

// Keep route definitions in one place so future modules can add their own pages.
export const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFoundPage /> },
]

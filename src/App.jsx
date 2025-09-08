/**
* App bootstraps React Router using RouterProvider.
* If you ever see "invalid hook call" again after upgrades,
* clear Vite's prebundle cache (node_modules/.vite) and reinstall deps.
*/
import { RouterProvider } from 'react-router-dom'
import router from '@/routes/index.jsx' // uses '@' alias defined in vite.config.js


export default function App() {
  return <RouterProvider router={router} />
}
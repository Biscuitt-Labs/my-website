// src/routes/index.jsx
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import About from '@/pages/About.jsx'
import Games from '@/pages/Games.jsx'
import Projects from '@/pages/Projects.jsx'
import Contact from '@/pages/Contact.jsx'

const router = createBrowserRouter([
    {
        element: <MainLayout />, // shared header/footer wrapper
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/games', element: <Games /> },
            { path: '/projects', element: <Projects /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
])

export default router

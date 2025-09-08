import { Outlet } from 'react-router-dom'
import Navbar from '@/components/common/Navbar.jsx'
import Footer from '@/components/common/Footer.jsx'
import styles from './MainLayout.module.css'


export default function MainLayout() {
    return (
        <div className={styles.shell}>
            <Navbar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
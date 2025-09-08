/**
* App-wide layout: sticky Navbar, routed content via <Outlet/>, and Footer.
* Keep it purely presentational—no data fetching here.
*/
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/common/Navbar.jsx'
import Footer from '@/components/common/Footer.jsx'
import styles from './MainLayout.module.css'


export default function MainLayout() {
    return (
        <div className={styles.shell}>
            <Navbar />
            <main className={styles.main}>
                {/* React Router renders the current route here */}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
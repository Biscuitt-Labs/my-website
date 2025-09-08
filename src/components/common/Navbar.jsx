import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'


const links = [
    { to: '/about', label: 'About' },
    { to: '/games', label: 'Games' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
]


export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.bar}>
                    <a href="/" className={styles.logo}>Biscuit Labs</a>
                    <nav className={styles.nav}>
                        {links.map(l => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}
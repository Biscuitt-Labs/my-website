/**
* Quiet footer with a dynamic year.
*/
import styles from './Footer.module.css'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <small>© {new Date().getFullYear()} Biscuit Labs</small>
            </div>
        </footer>
    )
}
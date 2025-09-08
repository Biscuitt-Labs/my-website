// A tiny, reusable banner for the Home page.
// Uses a CSS Module for scoped styles so classes won't collide across the app.
import styles from './WelcomeBanner.module.css'


export default function WelcomeBanner() {
    return (
        <div className={styles.banner}>
            {/* Keep headings semantic; this H1 is the page's primary headline. */}
            <h1 className={styles.title}>Welcome to the Lab!</h1>
            <p className={styles.tagline}>
                We turn bright ideas into playful, meaningful games.
            </p>
        </div>
    )
}
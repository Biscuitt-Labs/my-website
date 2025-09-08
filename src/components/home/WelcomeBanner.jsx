import styles from './WelcomeBanner.module.css'


export default function WelcomeBanner() {
    return (
        <div className={styles.banner}>
            <h1 className={styles.title}>Welcome to the Lab!</h1>
            <p className={styles.tagline}>
                We turn bright ideas into playful, meaningful games.
            </p>
        </div>
    )
}
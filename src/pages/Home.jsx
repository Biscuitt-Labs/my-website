// The Home page composes larger sections (Banner + Board).
// Keep pages thin: they shouldn't contain business logic.
import WelcomeBanner from '@/components/home/WelcomeBanner.jsx'
import TileBoard from '@/components/home/TileBoard/TileBoard.jsx'


export default function Home() {
    return (
        <section className="container">
            <WelcomeBanner />
            <TileBoard />
        </section>
    )
}
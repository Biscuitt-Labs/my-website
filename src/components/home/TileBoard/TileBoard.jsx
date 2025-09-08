// A responsive, colorful 7x7 perimeter tile board.
// Uses CSS Grid for layout. The central "card" area can host featured content later.
import LabBeaker from '../LabBeaker.jsx'
import styles from './TileBoard.module.css'


// Rotate through brand candy colors defined in variables.css
const COLORS = [
    'var(--tile-orange)',
    'var(--tile-yellow)',
    'var(--tile-green)',
    'var(--tile-blue)',
    'var(--tile-pink)'
]


export default function TileBoard() {
    // Build a list of tile coordinates around the perimeter (1..7 rows & cols)
    const tiles = []
    for (let r = 1; r <= 7; r++) {
        for (let c = 1; c <= 7; c++) {
            // Only push outer ring positions
            if (r === 1 || r === 7 || c === 1 || c === 7) {
                tiles.push({ r, c })
            }
        }
    }


    return (
        <div className={styles.board}>
            <div className={styles.grid}>
                {/* Render perimeter tiles with cycling colors */}
                {tiles.map((t, i) => (
                    <div
                        key={`${t.r}-${t.c}`}
                        className={styles.tile}
                        style={{
                            gridRow: t.r,
                            gridColumn: t.c,
                            backgroundColor: COLORS[i % COLORS.length],
                        }}
                    />
                ))}


                {/* Center area reserved for content (cards, CTA, etc.) */}
                <div className={styles.cardPlaceholder} />


                {/* Decorative beaker tucked on the board edge */}
                <div className={styles.beaker}>
                    <LabBeaker />
                </div>
            </div>
        </div>
    )
}
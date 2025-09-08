import LabBeaker from '../LabBeaker.jsx'
import styles from './TileBoard.module.css'


const COLORS = [
    'var(--tile-orange)',
    'var(--tile-yellow)',
    'var(--tile-green)',
    'var(--tile-blue)',
    'var(--tile-pink)'
]


export default function TileBoard() {
    // build a 7x7 ring of tiles
    const tiles = []
    for (let r = 1; r <= 7; r++) {
        for (let c = 1; c <= 7; c++) {
            if (r === 1 || r === 7 || c === 1 || c === 7) {
                tiles.push({ r, c })
            }
        }
    }


    return (
        <div className={styles.board}>
            <div className={styles.grid}>
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


                <div className={styles.cardPlaceholder} />
                <div className={styles.beaker}>
                    <LabBeaker />
                </div>
            </div>
        </div>
    )
}
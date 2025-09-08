// Simple inline SVG so it's easy to color with CSS variables.
// You can swap this for a more detailed illustration later.
export default function LabBeaker(props) {
    return (
        <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--tile-pink)" />
                    <stop offset="100%" stopColor="var(--tile-orange)" />
                </linearGradient>
            </defs>
            {/* Flask outline */}
            <path d="M45 10h30v12l25 80c3 10-4 20-14 20H34c-10 0-17-10-14-20l25-80V10z" fill="#fff" opacity="0.9" />
            <path d="M45 22l-26 82c-3 9 4 18 13 18h52c9 0 16-9 13-18L71 22" fill="none" stroke="#0a3a3f" strokeWidth="4" />
            {/* Goo */}
            <path d="M26 96c7-9 23-8 33-3s18 6 28-1l7 12c2 3-2 10-8 10H35c-6 0-12-7-9-11l0-7z" fill="url(#g)" />
            {/* Bubbles */}
            <circle cx="65" cy="95" r="3" fill="var(--tile-yellow)" />
            <circle cx="50" cy="103" r="2.5" fill="var(--tile-blue)" />
            <circle cx="78" cy="100" r="2.5" fill="var(--tile-green)" />
        </svg>
    )
}
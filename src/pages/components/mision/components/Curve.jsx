import style from '../style.module.scss'

const dotsLineDesktop = [
    { cx: 100,    cy: 342 },
    { cx: 410,  cy: 252 },  
    { cx: 720,  cy: 150 },   
    { cx: 1037, cy: 48 },  
];

const dotsLineMobile = [103, 333, 563, 793];

export function StatsCurve() {
    return (
        <>
            <svg
                className={style["mission__curve-desktop"]}
                viewBox="0 0 1131 344"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '90%', height: 'auto', margin: '0 auto', overflow: 'visible' }}
            >
                <path
                    d="M1.5 290.5L4.51156 294.798C51.2511 361.504 151.358 357.405 192.488 287.102C216.941 245.304 265.533 224.012 312.839 234.366L382.209 249.55C431.172 260.267 480.868 234.812 500.781 188.816C521.763 140.35 575.532 115.073 626.239 129.835L680.02 145.493C735.798 161.732 795.544 138.62 825.872 89.071L843.428 60.3896C872.098 13.5498 934.01 0.0230831 979.603 30.6376C1012.69 52.8569 1056.04 52.4596 1088.71 29.6375L1129 1.5"
                    stroke="#1F8BFF"
                    strokeOpacity="0.6"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                {dotsLineDesktop.map((p, i) => (
                    <g key={i}>
                        <circle
                            cx={p.cx} cy={p.cy} r="18"
                            fill="rgba(31,139,255,0.2)"
                            className={style["mission__dot-pulse"]}
                            style={{ animationDelay: `${p.delay}s` }}
                        />
                        <circle cx={p.cx} cy={p.cy} r="7" fill="rgba(31,139,255,1)" />
                    </g>
                ))}
            </svg>


            <svg
                className={style["mission__curve-mobile"]}
                width="30"
                viewBox="0 0 30 896"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="14" width="3" height="896" rx="1.5" fill="#1F8BFF" fillOpacity="0.4" />
                {dotsLineMobile.map((cy, i) => (
                    <g key={i}>
                        <circle cx="15" cy={cy} r="15" fill="#1F8BFF" fillOpacity="0.2"
                            className={style["mission__dot-pulse"]}
                            style={{ animationDelay: `${i * 0.5}s` }}
                        />
                        <circle cx="15" cy={cy} r="8" fill="#1F8BFF" />
                    </g>
                ))}
            </svg>
        </>
    )
} 
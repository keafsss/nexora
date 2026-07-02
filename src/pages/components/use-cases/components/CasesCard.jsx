import style from './style.module.scss'


export function CaseCard({
    title,
    items,
    footerLabel,
    footerType,
    footerText,
    footerItems,
}) {
    return (
        <div className={style["card"]}>
            <div className={style["card__top"]}>
                <h2>{title}</h2>
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>
                            <CheckIcon />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={style["card__bottom"]}>
                <h3>{footerLabel}</h3>

                {footerType === 'text' && <p>{footerText}</p>}

                {footerType === 'list' && (
                    <ul className={style["card__list--cols"]}>
                        {footerItems.map((item, i) => (
                            <li key={i}>
                                <CheckIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M3 8.5L6 11.5L13 4.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
import style from './style.module.scss'

export function FeaturesCard({
    title,
    subtitle,
    icon
}) {
    return (
        <div className={style["card"]}>
            <div className={style['card__imgBg']}>
                <img src={icon} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}
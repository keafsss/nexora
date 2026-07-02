import style from './style.module.scss'

export function MissionCard({
    value,
    label
}) {
    return (
        <div className={style["mission__card"]}>
            <h2>{value}</h2>
            <p>{label}</p>
        </div>
    )
}
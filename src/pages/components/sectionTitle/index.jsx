import style from './style.module.scss';

const SectionTitle = ({ label, title }) => {
    return (
        <div className={style['section__title']}>
            <h3>{label}</h3>
            <h1>{title}</h1>
        </div>
    )
}

export default SectionTitle
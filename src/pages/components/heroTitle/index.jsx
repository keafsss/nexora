import style from './style.module.scss'
import logo from '../../../assets/logos/logo.svg'

const HeroTitle = ({
    children, 
    title
}) => {
    return (
        <div className={`${style["title"]}`}>
            <div className={style["title__name"]}>
                <img src={logo} alt="nexora" />
                {title ? <h3>{title}</h3> : ''}
            </div>

            <h2>{children}</h2>
        </div>
    )
}

export default HeroTitle;
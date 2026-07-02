import style from './style.module.scss'
import { Check, X } from 'lucide-react';

const AdvantagesCard = ({
    title,
    subtitle,
    items,
    variant = 'default',
    icon
}) => {

     const itemClass =
        variant === 'default'
            ? style['card__item--grey']
            : style['card__item--white'];
            
    return (
        <div className={`${style['card']} ${style[`card--${variant}`]}`}>
            <div className={style['card__header']}>
                {icon && <span className={style['card__icon']}>{icon}</span>}
                <h2>{title}</h2>
            </div>
            <p className={style['card__subtitle']}>{subtitle}</p>
            <ul className={style['card__list']}>
                {items.map((item, i) => (
                    <li key={i} className={`
                        ${style['card__item']}
                        ${itemClass}`}
                        >
                        <span className={style['card__item-icon']}>
                            {variant === 'blue'
                                ? <Check size={20} strokeWidth={2} />
                                : <X size={20} strokeWidth={2} />
                            }
                        </span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdvantagesCard;
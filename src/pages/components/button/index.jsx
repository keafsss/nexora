import style from './style.module.scss';
import Icon from '../../../assets/icons/arrow.svg';

const ButtonDemo = ({
    children,
    size = 'small',
    directIcon = false,
    color = 'blue',
    ...props
}) => {
    return (
        <a
            href="https://calendly.com/nexoralab-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`${style.btn} ${style[`btn--${size}`]} ${style[`btn--${color}`]}`}
            {...props}
        >
            <span className={style.btn__label}>{children}</span>

            {directIcon && (
                <span className={style.btn__icon}>
                    <img src={Icon} alt="" />
                </span>
            )}
        </a>
    );
};

export default ButtonDemo;
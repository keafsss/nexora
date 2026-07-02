import ButtonDemo from '../button'
import style from './styles.module.scss'
import logoName from '../../../assets/logos/logo_nexora.svg'
import handPhone from '../../../assets/hand_phone.png'

export function Hero() {
    return (
        <section id='product' className={`container ${style['hero']}`}>
            <div className={style["hero__title"]}>
                <h1>
                    The operating system for{' '}
                    <span className='accent'>next-gen</span>{' '}
                    cryptobanking
                </h1>
                <div className={style['hero__description']}>
                    <p>Wallet. Card. IBAN — under your brand. Launch your own AI crypto-bank in 60 days, without building a 20-person team</p>
                    <ButtonDemo size='large'
                    directIcon>Book a Demo</ButtonDemo>
                </div>
            </div>
            <div className={style["hero__banner"]}>
                <div className={style['hero__banner-bg']}>
                    <img className={style['hero__banner-namelg']} src={logoName} alt="" />
                </div>
                <img className={style['hero__banner-handph']} src={handPhone} alt="Logo" />
            </div>
        </section>
    )
}
import { useState } from 'react'
import ButtonDemo from '../button'
import style from './style.module.scss'

const insideBlockInfo = [
    {
        number: '01',
        title: 'Wallet',
        subtitle: 'Multi-currency crypto & fiat wallet under your own brand and design',
    },
    {
        number: '02',
        title: 'Card',
        subtitle: 'Virtual and physical crypto cards worldwide via Apple Pay & Google Pay',
    },
    {
        number: '03',
        title: 'IBAN',
        subtitle: 'Dedicated IBANs and SEPA transfers, fully embedded in your app.',
    },
]

export function Inside() {
    const [active, setActive] = useState(0)

    return (
        <section className={`container section ${style["inside"]}`}>
            <div className={style["inside__left"]}>
                <div className={style["inside__left-title"]}>
                    <h3>WHAT'S INSIDE</h3>
                    <h1>We Build. <br /> We Maintain. <br /> You Grow.</h1>
                </div>

                <div className={style['inside__btn--desktop']}>
                <ButtonDemo size='large' directIcon>Book a Demo</ButtonDemo>
                 </div>
            </div>

            <div className={style["inside__right"]}>
                {insideBlockInfo.map((item, i) => (
                    <div
                        key={i}
                        className={`${style["inside__item"]} ${i === active ? style["inside__item--active"] : ''}`}
                        onClick={() => setActive(i)}
                    >
                        <span className={style["inside__item-number"]}>{item.number}</span>
                        <div className={style["inside__item-content"]}>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))}

                <div className={style['inside__btn--mobile']}>
                    <ButtonDemo size='large' directIcon>Book a Demo</ButtonDemo>
                </div>
            </div>

        </section>
    )
}
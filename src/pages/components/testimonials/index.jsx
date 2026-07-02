import { useState } from 'react';
import SectionTitle from "../sectionTitle";
import style from './style.module.scss';
import ButtonDemo from '../button';
import HeroTitle from '../heroTitle/index'
 
const testimonials = [
    {
        initials: 'EM',
        role: 'Head of Product',
        company: 'European EMI',
        stars: 5,
        text: 'We launched a branded wallet and card in 9 weeks — with no in-house crypto team. AI compliance took half the manual work off our plate',
    },
    {
        initials: 'CX',
        role: 'CTO',
        company: 'Crypto exchange',
        stars: 5,
        text: 'Nexora gave us a full white-label stack in weeks. Integration was smooth and the support team was always available.',
    },
    {
        initials: 'NB',
        role: 'COO',
        company: 'Neobank',
        stars: 5,
        text: 'We went live faster than any competitor. The platform handled everything — compliance, wallets, cards.',
    },
]

export function CTA() {
    const [active, setActive] = useState(0)

    return (
        <section className={`container section ${style['cta']}`}>
            <SectionTitle
                title='What Teams Who Launched With Us Say'
                label='TESTIMONIALS'
            />

            <div className={style['cta__reviews']}>
                <div className={style['cta__authors']}>
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className={`${style['cta__author']} ${i === active ? style['cta__author--active'] : ''}`}
                            onClick={() => setActive(i)}
                        >
                            <div className={style['cta__author-avatar']}>
                                {item.initials}
                            </div>
                            <div className={style['cta__author-info']}>
                                <span className={style['cta__author-role']}>{item.role}</span>
                                <span className={style['cta__author-company']}>{item.company}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={style['cta__divider']} />

                <div className={style['cta__content']}>
                    <div className={style['cta__stars']}>
                        {'★'.repeat(testimonials[active].stars)}
                    </div>
                    <p className={style['cta__text']}>{testimonials[active].text}</p>
                </div>
            </div>

            <div className={style['cta__bottom']}>
                <HeroTitle>Ready to launch your <span className="accent">crypto-bank</span>?</HeroTitle>
                <p>Book a 30-minute demo with our team and get a tailored launch plan</p>
                <ButtonDemo size='large' directIcon>Book a Demo</ButtonDemo>
            </div>
        </section>
    )
}
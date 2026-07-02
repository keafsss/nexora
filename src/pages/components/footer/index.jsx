import { useState } from 'react';
import style from './style.module.scss';
import logo from '../../../assets/logos/logo.svg'
import logoText from '../../../assets/logos/logo_nexora.svg'

const footerLinks = {
    Company: [
        { name: 'Mission', link: '#why-nexora' },
        { name: 'Book a demo', link: 'https://calendly.com/nexoralab-info/30min' },
    ],
    Services: [
        { name: 'Advantages', link: '#advantages' },
        { name: 'Features', link: '#features' },
        { name: 'Why Nexora', link: '#why-nexora' },
    ],
    Support: [
        { name: 'Contact us', link: 'mailto:info@nexoralab.biz' },
    ],
    Information: [
        { name: 'Privacy Policy', link: '/privacy' },
        { name: 'Cookie Policy', link: '/cookies' },
        { name: 'Terms of Service', link: '/terms' },
    ],
};

const columnLabels = {
    Company: 'Company',
    Services: 'Services',
    Support: 'Help',
    Information: 'Information',
};

export function Footer() {
    const [openColumn, setOpenColumn] = useState(null);

    const toggleColumn = (title) => {
        setOpenColumn(prev => (prev === title ? null : title));
    };

    return (
        <footer className={style["footer"]}>
            <div className={style["footer__inner"]}>
                <div className={`container ${style["footer__top"]}`}>
                    <div className={style["footer__brand"]}>
                        <div className={style["footer__logo"]}>
                            <img className={style['footer__logo-img']} src={logo} alt="Nexora" />
                            <img className={style['footer__logo-text']} src={logoText} alt="" />
                        </div>
                        <p>
                            The operating system next-gen cryptobanking.
                            <br />
                            Wallet, Card, IBAN — under your brand
                        </p>
                    </div>

                    <div className={style["footer__columns"]}>
                        {Object.entries(footerLinks).map(([title, links]) => {
                            const isOpen = openColumn === title;
                            return (
                                <div
                                    className={`${style["footer__column"]} ${isOpen ? style["footer__column--open"] : ''}`}
                                    key={title}
                                >
                                    <button
                                        type="button"
                                        className={style["footer__column-head"]}
                                        onClick={() => toggleColumn(title)}
                                        aria-expanded={isOpen}
                                    >
                                        <h4>{columnLabels[title]}</h4>
                                        <span className={style["footer__chevron"]} aria-hidden="true" />
                                    </button>

                                    <div className={style["footer__column-body"]}>
                                        <ul>
                                            {links.map(({ name, link }) => (
                                                <li key={name}>
                                                    <a href={link}>{name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={style["footer__divider"]} />

                <div className={`container ${style["footer__bottom"]}`}>
                    <span>© 2026 NEXORA. All rights reserved.</span>
                    <a href="mailto:info@nexoralab.biz">info@nexoralab.biz</a>
                </div>
            </div>
        </footer>
    )
}
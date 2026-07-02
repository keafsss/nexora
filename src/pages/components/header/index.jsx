import style from './styles.module.scss';
import logo from '../../../assets/logos/logo.svg'
import logoName from '../../../assets/logos/logo_nexora.svg'
import burgerIcon from '../../../assets/icons/lang.svg'
import closeIcon from '../../../assets/icons/lang.svg'
import ButtonDemo from '../button';
import { NavBar } from './navBar';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [sidebarOpen])

    const closeSidebar = () => setSidebarOpen(false)

    return (
        <Fragment>
            <header className={`${style['header']} ${scrolled ? style['header--scrolled'] : ''}`}>
                <div className={`container ${style["header__container"]}`}>
                    <Link to='/'><div className={style["header__logo"]}>
                        <img src={logo} alt="Logo" className={style['header__logoIcon']} />
                        <img src={logoName} alt="Nexora" className={style['header__logoName']} />
                    </div></Link>

                    <div className={style["header__nav-desktop"]}>
                        <NavBar />
                    </div>

                    <div className={style["header__right"]}>
                        <ButtonDemo>Book a Demo</ButtonDemo>
                        <button
                            className={style["header__burger"]}
                            onClick={() => setSidebarOpen(true)}
                            aria-label="Open menu"
                        >
                            <img src={burgerIcon} alt="" />
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`${style["header__overlay"]} ${sidebarOpen ? style["header__overlay--visible"] : ''}`}
                onClick={closeSidebar}
            />

            <aside className={`${style["header__sidebar"]} ${sidebarOpen ? style["header__sidebar--open"] : ''}`}>
                <button
                    className={style["header__sidebar-close"]}
                    onClick={closeSidebar}
                    aria-label="Close menu"
                >
                    <img src={closeIcon} alt="" />
                </button>
                <NavBar onLinkClick={closeSidebar} />
                <ButtonDemo>Book a Demo</ButtonDemo>
            </aside>
        </Fragment>
    )
}
import { useState, useEffect } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'

export function CookieBanner() {
    const [visible, setVisible] = useState(false)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const accepted = localStorage.getItem('cookieAccepted')
        if (accepted) {
            setHidden(true)
            return
        }

        const timer = setTimeout(() => setVisible(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', 'true')
        setVisible(false)
        setTimeout(() => setHidden(true), 200)
    }

    const handleEssential = () => {
        localStorage.setItem('cookieAccepted', 'essential')
        setVisible(false)
        setTimeout(() => setHidden(true), 200)
    }

    if (hidden) return null

    return (
        <div className={`${style['cookie']} ${visible ? style['cookie--visible'] : ''}`}>
            <div className={style['cookie__text']}>
                <p>
                    We use cookies to improve your experience. Read our{' '}
                    <Link to="/cookies" className={style['cookie__link']}>Cookie Policy</Link>.
                </p>
            </div>
            <div className={style['cookie__actions']}>
                <button className={style['cookie__btn--accept']} onClick={handleAccept}>
                    Accept all
                </button>
                <button className={style['cookie__btn--essential']} onClick={handleEssential}>
                    Essential only
                </button>
            </div>
        </div>
    )
}
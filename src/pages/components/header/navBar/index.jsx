import useActiveSection from '../../../../hooks/useScroll';
import style from './style.module.scss';

const navItems = [
    { label: "Product",    id: "product" },
    { label: "Advantages", id: "advantages" },
    { label: "Features",   id: "features" },
    { label: "Why Nexora", id: "why-nexora" },
    { label: "Use Cases",  id: "use-cases" },
]

export function NavBar({ onLinkClick }) {
    const active = useActiveSection(navItems.map(item => item.id))

    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        onLinkClick?.()
    }

    return (
        <nav className={style["navbar"]}>
            {navItems.map((item, index) => (
                <button
                    key={index}
                    className={`${style["navbar__item"]} ${active === item.id ? style["navbar__itemActive"] : ""}`}
                    onClick={() => handleClick(item.id)}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    )
}
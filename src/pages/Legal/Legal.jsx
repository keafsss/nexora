import { Header } from "../components/header";
import style from './style.module.scss'

export function Legal({ data }) {
    return (
        <>
            <Header />
            <main className={`container section ${style['legal']}`}>
                <div className={style['legal__header']}>
                    <h1>{data.theme}</h1>
                    <p className={style['legal__date']}>Effective Date: June 24, 2026</p>
                    <p>{data.intro}</p>
                </div>

                <div className={style['legal__sections']}>
                    {data.sections.map((section, i) => (
                        <div key={i} className={style['legal__section']}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                            {section.items.length > 0 && (
                                <ul>
                                    {section.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}
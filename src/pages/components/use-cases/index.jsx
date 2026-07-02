import SectionTitle from "../sectionTitle";
import { CaseCard } from "./components/CasesCard";
import style from'./style.module.scss'

const topCases = [
    {
        title: 'Crypto companies',
        items: ['Exchanges, brokers', 'OTC desks', 'Crypto exchangers', 'Trading platforms'],
        footerLabel: 'What they want?',
        footerType: 'list',
        footerItems: ['Card', 'IBAN', 'Loyalty program', 'Crypto app'],
    },
    {
        title: 'New EMIs & PSPs',
        items: ['EMIs', 'PSPs', 'Neobanks'],
        footerLabel: 'Their problem',
        footerType: 'text',
        footerText: 'Clients ask for USDT, BTC, stablecoins and cross-border transfers — but they have no in-house crypto expertise',
    },
]

const bottomCases = [
    {
        title: 'Banks',
        items: ['Regional banks', 'Digital banks', 'Challenger banks'],
        footerLabel: 'Their problem',
        footerType: 'text',
        footerText: 'They see crypto demand, but building from scratch takes years. They want a fast crypto-banking line.',
    },
    {
        title: 'Investment communities',
        items: ['Investment clubs', 'Trader communities', 'DAOs', 'Crypto influencers'],
        footerLabel: 'Their problem',
        footerType: 'text',
        footerText: 'They see crypto demand, but building from scratch takes years. They want a fast crypto-banking line.',
    },
    {
        title: 'Super-apps',
        items: ['Telecom companies', 'Marketplaces', 'Loyalty platforms', 'Travel apps'],
        footerLabel: 'What they want',
        footerType: 'text',
        footerText: 'To add a financial layer to their existing business',
    },
]

export function UseCases() {
    return (
        <section id='use-cases' className={`${style['use']}`}>
            <div className={`container section ${style['use__container']}`}>
                <SectionTitle
                    label="WHO IT'S FOR"
                    title="Who Our Solution Can Make Richer"
                />

                <div className={style["use__cards"]}>
                    <div className={style["use__cards-top"]}>
                        {topCases.map((item, i) => (
                            <CaseCard key={i} {...item} />
                        ))}
                    </div>

                    <div className={style["use__cards-bottom"]}>
                        {bottomCases.map((item, i) => (
                            <CaseCard key={i} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
import HeroTitle from '../heroTitle'
import { StatsCurve } from './components/Curve'
import { MissionCard } from './components/MissionCard'
import style from './style.module.scss'

const statsData = [
    { value: '$6.1B+', label: 'Total volume of incoming transactions processed' },
    { value: '12.8M+', label: 'Transactions successfully processed using our Core solution' },
    { value: '11 years', label: "Our engineering team's experience in developing and optimizing blockchain architecture" },
    { value: '96.9%', label: 'Customer satisfaction rate among B2B partners' },
]

const cardOffsets = [0, 90, 180, 270]

export function Mission() {
    return (
        <section id='why-nexora' className={style["mission"]}>
            <div className='container'>
                <HeroTitle title='MISSION'>
                    We create value by unlocking the potential of the
                    <span className='accent'> finance of the future</span>!
                </HeroTitle>
            </div>

            <div className={style["mission__inner"]}>
                <div className='container'>
                    <div className={style["mission__chart"]}>
                        <StatsCurve />
                        <div className={style["mission__cards"]}>
                            {statsData.map((item, i) => (
                                <div
                                    key={i}
                                    className={style["mission__card-wrap"]}
                                    style={{ '--offset': `${cardOffsets[i]}px` }}
                                >
                                    <MissionCard value={item.value} label={item.label} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import ButtonDemo from '../button';
import HeroTitle from '../heroTitle';
import AdvantagesCard from './components/advanCard';
import NexoraIcon from './components/NexoraIcon';
import style from './style.module.scss';

const competitorItems = [
    '12–18 months until the first release',
    'A team of 7–10 high-cost specialists',
    'Ongoing maintenance costs',
    'Risk of budget and deadline overrun',
]

const nexoraItems = [
    'Launch a ready-to-use product in 30 days',
    '0 developers on your end',
    '24/7 technical support and updates',
    'Fixed launch cost and predictable results',
]


export function Advantages() {
    return (
        <section id='advantages' className={`container  section ${style["advantages"]}`}>
            <HeroTitle title={'THE DIFFERENCE'}>
                Others sell you a project. We stitch crypto and fiat {' '}
                    <span className='accent'>together</span>{' '} — so it actually works.
                <br />Under your brand.
            </HeroTitle>

            <div className={style['advantages__diver']}></div>

            <div className={` ${style["advantages__container"]}`}>
                <div className={style['advantages__container-card']}>
                <AdvantagesCard 
                    title="Competitors offer to build"
                    subtitle="From scratch, on their own"
                    items={competitorItems}
                    variant="default"
                />
                <AdvantagesCard 
                    title="Nexora White-Label"
                    subtitle="One stack. Your brand. 60 days.n"
                    items={nexoraItems}
                    variant="blue"
                    icon={<NexoraIcon />}
                />
                </div>
                <ButtonDemo
                size='large'
                color='black'   
                directIcon>
                    Calculate the cost of integration
                </ButtonDemo>
            </div>
        </section>
    )
}
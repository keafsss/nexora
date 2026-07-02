import ButtonDemo from '../button'
import { FeaturesCard } from './components/FeatureCard'
import style from './style.module.scss'

import mobileIcon from '../../../assets/icons/mobile.svg';
import cryptoIcon from '../../../assets/icons/shits.svg';
import supportIcon from '../../../assets/icons/support.svg';
import SectionTitle from '../sectionTitle';

const featuresCardInfo = [
    {
        id: 1,
        title: 'iOS & Android Apps',
        subtitle: 'A customized app that we publish in Stories under your brand',
        icon: mobileIcon
    },
    {
        id: 2,
        title: 'Crypto Infrastructure',
        subtitle: 'Instant crypto processing and global crypto cards',
        icon: cryptoIcon
    },
    {
        id: 3,
        title: 'Launch & 24/7 Support',
        subtitle: 'Complete system deployment and ongoing maintenance',
        icon: supportIcon
    },
]

export function Features() {
    return (
        <section id='features' className={`section ${style["features"]}`}>
            <div className={`container ${style["features__container"]}`}>
                <SectionTitle
                label="WHAT WE OFFER"
                title="The Core of Your Fintech Platform" />
                <div className={style["features__cards"]}>
                    {featuresCardInfo.map((item, i) => (
                        <FeaturesCard
                        key={i}
                        title={item.title}
                        subtitle={item.subtitle}
                        icon={item.icon} />
                    ))}
                </div>
            </div>
            <div className={`container section ${style["features__footer"]}`}>
                    <h2>Your own branded crypto bank.
                        <br /> <span className='accent'> Ready in 60 days.</span>
                    </h2>

                    <ButtonDemo
                        size='large' 
                        directIcon
                    >Book a Demo</ButtonDemo>
                </div>
        </section>
    )
}
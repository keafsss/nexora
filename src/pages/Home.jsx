import { Footer } from "./components/footer";
import { Header } from "./components/header";
import {CookieBanner} from './components/cookie/index';
import { Hero } from './components/hero/index';
import { Advantages } from './components/advantages';
import { Features } from './components/features/index';
import { Inside } from './components/inside/index';
import { Mission } from './components/mision/index';
import { UseCases } from './components/use-cases/index';
import { CTA } from './components/testimonials/index'

export function Home() {
    return (
        <>
            <Header />
            <CookieBanner />
            <main>
                <Hero />
                <Advantages />
                <Features />
                <Inside />
                <Mission />
                <UseCases />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
import Hero from "../components/HeroSection";
import HeroIntro from "../components/HeroIntro"
import Platforms from "../components/Platforms"
import Projects from "../components/Projects"
import Services from "../components/Services"

const Home = () => {
    return (
        <>
        <HeroIntro />
        <Hero />
        <Platforms />
        <Services />
        <Projects />
        </>
    )
}

export default Home
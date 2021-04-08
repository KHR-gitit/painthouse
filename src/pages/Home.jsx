import Hero from './../components/Hero'
import Feature from './../components/Feature';
import Portifolio from './../components/Portifolio';
import WhyUs from './../components/WhyUs';
import Testimonial from './../components/Testimonial';
const Home = ({menuHover, menuRemoveHover}) => {
    return (
        <>
            <Hero menuHover={menuHover} menuRemoveHover={menuRemoveHover}/>
            <Feature menuHover={menuHover} menuRemoveHover={menuRemoveHover}/>
            <WhyUs/>
            <Portifolio/>
            <Testimonial/>
        </>
    )
}

export default Home

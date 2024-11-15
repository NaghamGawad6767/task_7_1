
import Hero from './../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Text from '../../components/Text/Text'
import VideoSection from '../../components/VideoSection/VideoSection'
import PricingSection from '../../components/PricingSection/PricingSection'
import Ser from '../../components/Ser/Ser'
import Logo from './../../components/Logo/Logo'
import photo1 from './../../assets/images/ctaThumb1_1.webp'
import photo2 from './../../assets/images/ctaThumb.webp'
import Contact24 from '../../components/Contact24/Contact24'
import Testimonials from '../../components/Testimonials/Testimonials'
import Blog from '../../components/Blog/Blog'
export default function Home() {
    return (
        <>
            <Navbar x={true} />
            <Hero />
            <Logo x={true} />
            <Ser y={true} />
            <VideoSection />
            <Text />
            <PricingSection />
            <Contact24 image={photo1} x={true} title={"24/7 Expert Hosting Support Our Customers Love"} />
            <Testimonials />
            <Blog />
            <Contact24 image={photo2} x={false} title={"Stay Connected With Cutting Edge IT"} />
            
        </>

    )
}
import Header from '../components/header'
import Footer from '../components/footer'
import FeaturedPups from '../components/index-sections/featuredPups'
import Testimonials from '../components/index-sections/testimonial'
import Links from '../components/index-sections/links'
import Faq from '../components/index-sections/faq'
import About from '../components/index-sections/about'
import Process from '../components/index-sections/proccessInfo'
import Landing from '../components/index-sections/landingImage'



import styles from './index.module.css'

const Index = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <Landing/>
            <Testimonials />
            <FeaturedPups />
            <Links />
            <Process />
            <About />
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Index
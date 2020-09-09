import Header from '../components/header'
import Footer from '../components/footer'
import Pups from '../components/index-sections/pups'
import Testimonials from '../components/index-sections/testimonial'
import Litter from '../components/index-sections/litter'
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
            <Pups />
            <Litter />
            <Process />
            <About />
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Index
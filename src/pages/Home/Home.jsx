import style from './home.module.scss'
import Hero from '../../components/Hero/Hero'
import FeatureItem from '../../components/FeatureItem/FeatureItem'
import {featuresInfo} from '../../data/FeaturesInfo'

const Home = () => {
  return (
    <main>
      <Hero />
      <section className={style.features}>
        <h2 className={style.srOnly}>Features</h2>
        {featuresInfo.map(feature => <FeatureItem key={feature.id} {...feature} />)}
      </section>
    
    </main>
  )
}

export default Home

import './style.css'
import BannerImage from '../../assets/banner.png'
const Banner = () => (
  <div className='bannerSection'>
    <div className='bannerImage' >
      <img src={BannerImage} alt='background image person' />
    </div>

    <div className='bannerText'>
      <p>BRANDING / UI / TECNOLOGIA</p>
      <h1>Agência de Branding</h1>
      <h1>e design digital</h1>
    </div>
  </div>
)

export default Banner

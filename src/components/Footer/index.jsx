import './style.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import dribble from '../../assets/dribble.png'
import behance from '../../assets/behance.png'
import googlePlus from '../../assets/google-plus.png'

import logo from '../../assets/logo.png'


const Footer = () => (
  <footer>
    <img className='logo' src={logo} alt='logo' />
    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando extratégias, ferramentas e tecnologias personalizadas.</p>
    <div className='socialMedias'>
      <a href='#'>
        <img src={facebook} alt='facebook' />
      </a>
      <a href='#'>
        <img src={twitter} alt='twitter' />
      </a>
      <a href='#'>
        <img src={linkedin} alt='linkedin' />
      </a>
      <a href='#'>
        <img src={dribble} alt='dribble' />
      </a>
      <a href='#'>
        <img src={behance} alt='behance' />
      </a>
      <a href='#'>
        <img src={googlePlus} alt='google-plus' />
      </a>
    </div>
    <p>Copyright 2023 &copy; <a href='#'>Jhonatan Sousa da Silva</a></p>
  </footer>
)

export default Footer
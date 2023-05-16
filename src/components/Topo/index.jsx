import './style.css'
import logo from '../../assets/logo.png'

const Topo = (props) => {


  return (
    <header>
      < a href='#' >
        <img className='logo' src={logo} alt='logomark' />
      </a >
      {props.children}
    </header>
  )
}
export default Topo
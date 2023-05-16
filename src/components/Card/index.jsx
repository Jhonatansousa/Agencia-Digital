import './style.css'

const Card = (props) => (
  <div className='card'>
    <p>{props.date}</p>
    <h3>{props.workspace}</h3>
    <p>{props.company}</p>
    <p>{props.description}</p>
  </div>
)

export default Card
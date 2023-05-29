import './CardSalon.css';
import icon from '../../assets/img/Icon.png'

const CardSalon = (props) => {
    return (
        <div className='cardsalon-component'>
        <img src={icon} alt='icon' className='icon'/>
        <h1 className='cardsalon-title'>{props.title}</h1>
        <p className='cardsalon-desc'>{props.desc}</p>
        </div>
    )
}

export default CardSalon;
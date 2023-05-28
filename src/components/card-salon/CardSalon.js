import react from 'react' // Import React dari library React
import './CardSalon.css' // Import CSS dari file CardSalon.css
import icon from '../../assets/img/Icon.png' // Import Gambar dari folder assets 

// Membuat Komponen CardSalon dan menerima props
const CardSalon = (props) => {
    return (
        <div className='cardsalon-component'>
        <img src={icon} alt='icon' className='icon'/>
        <h1 className='cardsalon-title'>{props.title}</h1>
        <p className='cardsalon-desc'>{props.desc}</p>
        </div>
    )
}

// Export Komponen CardSalon agar dapat digunakan
export default CardSalon;
import './Book.css';
import bgSalon from '../../assets/img/bgSalon.png';

const Book = () => {
    return (
    <div
      style={{
        backgroundImage: `url(${bgSalon})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingBottom: 100
      }}>
        <div className='book-section justify-content-center'>
            <h1 className='book-title'>Your Cat's Comfort is Our Priority</h1>
            <a href="/bookonline" className='book-cta'>BOOK NOW</a>
        </div>
    </div>
    )
} 

export default Book;
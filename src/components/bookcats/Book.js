import './Book.css' // import CSS dari file Book.css

// Membuat Komponen Book

const Book = () => {
    return (
        // Membuat Class book-section
        <div className='book-section'>
            <h1 className='book-title'>Your Cat's Comfort is Our Priority</h1>
            <button className='book-cta'>BOOK NOW</button>
        </div>
    )
} 

// Eksport Komponen Book

export default Book;
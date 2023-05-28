import './Book.css' // import CSS dari file Book.css

// Membuat Komponen Book

const Book = () => {
    return (
        // Membuat Class book-section
        <div className='book-section'>
            <h1 className='book-title'>Your Cat's Comfort is Our Priority</h1>
            <a href="/bookonline" className='book-cta'>BOOK NOW</a>
        </div>
    )
} 

// Eksport Komponen Book

export default Book;
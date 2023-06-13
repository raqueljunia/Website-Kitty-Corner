import './PriceList.css'
import priceListTable from '../../assets/img/priceList.png'

const PriceList = () => {
    return (
        <div className='pricelist-section'>
            <h1 className='pricelist-header'>PRICE LIST</h1>
            <img src={priceListTable} alt='price-list' className='pricelist-table' />
        </div>
    )
}

export default PriceList;
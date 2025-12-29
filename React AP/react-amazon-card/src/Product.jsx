import './Product.css';
import Price from './Price';

function Product({ title, idx }) {
    let oldPrice = ["1,50000", "90,000", "50,000", "1,20000"];
    let newPrice = ["99,999", "79,999", "24,999", "89,999"];
    let descriptions = [
        "iPhone 16 Pro Max |  Works with AirPods",
        "OnePlus 13 | Smarter with OnePlus AI",
        "Redmi Note 14 Pro+ 5G Champagne Gold",
        "Samsung Galaxy S24 Ultra 5G AI Smartphone"
    ]
    return(
        <>
        <div className='OTDiv'>
            <div className='Product'>
                <h2>{title}</h2>
                <p>{descriptions[idx]}</p>
                <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
            </div>
        </div>

        </>
    );
}

export default Product;
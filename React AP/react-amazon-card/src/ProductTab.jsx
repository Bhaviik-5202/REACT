import Product from "./Product";
import './Product.css';

function ProductTab() {
    return(
        <>
        <br /><br />
        <div className='OTDiv'>
            <Product title="Apple" idx={0}/><br />
            <Product title="OnePlue" idx={1}/><br />
            <Product title="Realme" idx={2}/><br />
            <Product title="Samsung" idx={3}/><br />
        </div>

        </>
    );
}

export default ProductTab;
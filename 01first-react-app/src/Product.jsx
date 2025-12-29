import "./Product.css";
function Product({ tital, Price }) {
  console.log(Price);
  return (
    <>
      <div className="Product">
        <h3>{tital}</h3>
        <p>Product Price : {Price}</p>
      </div>
    </>
  );
}

export default Product;

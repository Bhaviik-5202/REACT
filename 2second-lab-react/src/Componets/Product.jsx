function Product({
  Title,
  Price,
  pass1 = [],
  pass2 = {},
  pass3 = [],
  pass4 = {},
}) {

  return (
    <>
      <div className="Product">
        <h1>Product Name : {Title}</h1>
        <h3>Product Price : {Price}</h3>
        <p>{pass1}</p>
        <p>{pass2.a}</p>
        <p>{pass3}</p>
        <p>{pass4.b}</p>
      </div>
    </>
  );
}

export default Product;

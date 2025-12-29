function Product({
  Title,
  Price,
  pass1 = [],
  pass2 = {},
  pass3 = [],
  pass4 = {},
  name = [],
}) {
  return (
    <>
      <div className="Product">
        <h3>Product Name : {Title}</h3>
        <h3>Product Price : {Price}</h3>

        {/* Arrays */}
        <p>{pass1.join(", ")}</p>

        {/* Object */}
        <p>{pass2.a}</p>

        {/* Arrays */}
        <p>{pass3.join(", ")}</p>

        {/* Object */}
        <p>{pass4.b}</p>

        {/* Mapping array properly */}
        <ul>
          {name.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Product;

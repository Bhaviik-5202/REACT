import Product from "./Product";
function Props({ tital, Price }) {
  return (
    <>
      <div>
        <br />
        <Product tital="Mobile" Price={30000} />
        <br />
        <Product tital="Laptop" Price={50000} />
        <br />
        <Product tital="Bag" Price={1000} />
      </div>
    </>
  );
}

export default Props;

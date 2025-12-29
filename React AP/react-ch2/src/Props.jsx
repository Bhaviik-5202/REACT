import Product from "./Product";
import "./Product.css";

function Props() {
  let home = ["BHAVIK", "PIYUSH", "SUNIL"];
  let clg = {
    a: "BHAVIIK",
    b: "JAL",
    c: "YASH",
  };
  const data = ["BHAVIIK", "PARMAR", "Darshan"];

  return (
    <>
      <div>
        <Product Title="Mobile" Price="50000" pass1={home} />
        <br />
        <Product Title="Laptop" Price={100000} pass2={clg} />
        <br />
        <Product Title="Watch" Price={5000} pass3={["Narola", "Pandya"]} />
        <br />
        <Product
          Title="Bag"
          Price="1000"
          pass4={{ a: "Devo", b: "Aryan", c: "Mitiyo" }}
        />
        <br />
        <Product Title="Mapping Array" Price={1} name={data} />
      </div>
    </>
  );
}

export default Props;

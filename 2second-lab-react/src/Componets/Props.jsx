import Product from "./Product";
import "./Product.css";

function Props({ Title, Price }) {
  let home = ["BHAVIK", "PIYUSH", "SUNIL"];
  let clg = {
    a: "BHAVIIK",
    b: "JAL",
    c: "YASH",
  };
  return (
    <>
      <div>
        <Product Title="Mobile" Price="50000" pass1={home} />
        <br />
        <Product Title="Laptop" Price="100000" pass2={clg} />
        <br />
        <Product Title="Watch" Price="5000" pass3={["Narola", "Pandya"]} />
        <br />
        <Product
          Title="Bag"
          Price="1000"
          pass4={{ a: "Devo", b: "Aryan", c: "Mitiyo" }}
        />
      </div>
    </>
  );
}

export default Props;

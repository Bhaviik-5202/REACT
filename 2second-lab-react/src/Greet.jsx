function Greet1() {
  return <h1>Hello From Greet1</h1>;
}

function Greet2() {
  return <h1>Hello From Greet2</h1>;
}

function Greet3() {
  return <h1>Hello From Greet3</h1>;
}

function Greet() {
  return (
    <>
      <hr />
      <br />
      <Greet1 />
      <hr />
      <br />
      <Greet2 />
      <hr />
      <br />
      <Greet3 />
      <hr />
      <br />
    </>
  );
}
export default Greet;

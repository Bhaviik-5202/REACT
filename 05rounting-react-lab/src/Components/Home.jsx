import React, { useState } from "react";

function Home() {
  let HomeStyle = {
    border: "1px solid black",
    backgroundColor: "pink",
    color: "black",
  };
  const [count, setCount] = useState(0);
  let Update = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div style={HomeStyle}>
        <h1>Home Here</h1>
        <h3>Count = {count}</h3>
        <button onClick={Update}>Click Me</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          repellendus praesentium ut perspiciatis quis fuga et nulla ab placeat
          voluptatum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ad
          vero repellendus ab, deleniti, enim veritatis corporis deserunt
          voluptates nam voluptatum reprehenderit dolorem illum magnam eligendi
          dolore mollitia voluptatibus saepe dolores, amet minus odio. Assumenda
          iure reprehenderit ipsam natus alias, commodi architecto! Corrupti,
          praesentium nemo non, quidem, ab facere beatae tempore eveniet commodi
          illo enim expedita soluta magnam animi repudiandae quam quasi alias
          amet! Temporibus, architecto eos provident quae dolores eligendi modi
          reiciendis quisquam sed voluptates. Veniam sit nam tempore, alias
          atque iusto vitae sapiente beatae amet distinctio suscipit, corporis
          cum ea mollitia possimus dolores. Aliquid hic optio deleniti quis?
        </p>
        <h1>Footer Here</h1>
      </div>
    </>
  );
}

export default Home;

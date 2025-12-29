import React, { useEffect, useState } from "react";

function Hide() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          color: "black",
        }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          corporis omnis qui aperiam aliquid. Quas sit natus placeat optio quam
          dicta a amet assumenda qui.
        </p>
        {isVisible && <h1>Hello World..</h1>}
        {isVisible && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            deleniti repudiandae ex eos modi earum ea dolores! Consectetur
            similique nesciunt non delectus voluptatibus quas perspiciatis, odio
            necessitatibus maiores deleniti incidunt provident aliquid. Eos
            veritatis, placeat dolore necessitatibus possimus voluptatibus
            deleniti mollitia omnis reiciendis voluptates voluptate accusantium
            atque dolor nihil. Voluptatibus!
          </p>
        )}
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}

export default Hide;

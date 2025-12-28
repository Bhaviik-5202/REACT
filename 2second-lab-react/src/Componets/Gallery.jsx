function MyPhoto() {
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      <img src="./MyPhoto.png" alt="React Image" />
    </>
  );
}

function Gallery() {
  return (
    <>
      <div>
        <MyPhoto />
        <br />
        <hr />
        <MyPhoto />
        <br />
        <hr />
        <MyPhoto />
        <br />
        <hr />
        <MyPhoto />
        <br />
        <hr />
        <MyPhoto />
        <br />
        <hr />
      </div>
    </>
  );
}

export default Gallery;

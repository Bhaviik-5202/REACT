export default function MsgBox({ username }) {
  let style = { 
        backgroundColor: "pink" , 
        color : "black",
    };
  return (
    <>
      <h1 style={style}>Hello World....{username}</h1>
    </>
  );
}

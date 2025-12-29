import { Outlet, Link } from "react-router-dom";

function Mypage() {
  return (
    <>  
    <hr />
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default Mypage;

import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-3">
          <Logo />
        </div>
        <div className="col-9">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
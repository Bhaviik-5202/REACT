import LayoutL from "./LayoutL/LayoutL.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

function Layout() {
  return (
    <>
      <div className="BodyPart">
        <LayoutL />
        <Sidebar />
      </div>
    </>
  );
}

export default Layout;
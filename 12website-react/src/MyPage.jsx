import "./MyPage.css";
import Header from "./Componts/Header/Header";
import Layout from "./Componts/LauoutO/Layout";
import Footer from "./Componts/Footer/Footer";

function MyPage() {
  return (
    <>
      <div className="MyPage">
        <Header />
        <Layout />
        <Footer />
      </div>
    </>
  );
}
export default MyPage;
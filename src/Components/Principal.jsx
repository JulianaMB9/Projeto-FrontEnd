import Login from "./Login";
import HeaderLogin from "./Header.login";
import SidebarLogin from "./Siderbar.Login";
import Footer from "./Footer";
import Main2 from "./Main2";
import Main3 from "./Main3";

function Principal() {
  return (
    <div>
      <HeaderLogin />
      <div className="main">
        <SidebarLogin />
        <Login />
      </div>
      <Footer />
      <Main2 />
      <Main3 />
    </div>
  );
}

export default Principal;

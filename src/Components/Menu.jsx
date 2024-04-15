import Sidebar from "./Sidebar";
import Header from "./Header";
import Main3 from "./Main3";
import Opcoes from "./Opcoes";
import style from "./Menu.module.css";


function Menu() {
  return (
    <>
      <Header />

       <div className={style.container} >
        <Sidebar />
        <div>
        <Opcoes />
        </div>
        
      </div>
      <Main3 />
    </>
  );
}

export default Menu;

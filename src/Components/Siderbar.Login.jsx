import student from "../imgs/student.png";
import style from "./Siderbar.Login.module.css"

function SidebarLogin() {
  return (
    <div className={style.sidebar}>
      <img src={student} className={style.movendoimagem} />
    
      <h3> Olá <br /> Cadatre-se Grátis</h3> 
      
    </div>
  );
}

export default SidebarLogin;

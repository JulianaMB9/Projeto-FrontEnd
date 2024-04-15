import Logo from "../imgs/Logo.png";
import style from "./Header.login.module.css";
import {SignIn } from "phosphor-react"

function HeaderLogin() {
  return (
    <header className={style.header}>
      <div className={style.headerlogo}>
        <img src={Logo} alt="React Logo Header" />
        <h2>Matemática Descomplicada</h2>
      </div>
      {/* <div className={style.nav}>
        <select className={style.select} aria-label="Default select example">
          <option selected>Cursos </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div> */}
     
      <div className={style.ent}>
          {/* <img src={sair} alt="" />
          <button> Sair</button> */}
          <SignIn size={32} />
          
          <button> <a href="">Entrar</a> </button>
        </div>
    </header>
  );
}

export default HeaderLogin;

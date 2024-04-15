import Logo from "../imgs/Logo.png";
import style from "./Header.login.module.css";
import { SignIn } from "phosphor-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerlogo}>
        <img src={Logo} alt="React Logo Header" />
        <h2>Matemática Descomplicada</h2>
      </div>

      <div className={style.ent}>
        <SignIn size={32} />

        <Link to={"/"}>
          <button>Sair</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

import { PencilLine } from "phosphor-react";
import styles from "./sidebar.module.css";
import perfil from "../imgs/mulher.png";
import capa from "../imgs/fundo.jpg";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capa} />
      <div className={styles.profile}>
        <img className={styles.avatar} src={perfil} />
        <strong>Usuário</strong>
        <span> Iniciante</span>
      </div>
      <footer>
        <a>
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;

import style from "./Footer.module.css";
import img from "../imgs/Logo1.png"

function Footer() {
  return (
    <footer className={style.footer}>
      <div>
      <h1>Domine a matemática básica conosco!</h1>
      <p>
        Explore recursos interativos e tutoriais passo a passo gratuitos para
        reforçar suas habilidades em aritmética, álgebra e geometria. <br /><br /> Comece sua
        jornada para se tornar mais confiante em matemática hoje mesmo!
      </p>
      </div>

      <img src={img} alt="" />
  
    </footer>
  );
}

export default Footer;

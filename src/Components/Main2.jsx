import porcentagem from "../imgs/percentagem.png";
import operacoes from "../imgs/matematica.png";
import fracoes from "../imgs/metade.png";
import  juros from "../imgs/taxa-de-juro.png";
import conjunto from "../imgs/diagrama-de-venn.png";
import more from "../imgs/calculadora.png";
import style from "./Main2.module.css"

function Main2() {
    return (
      <div className={style.main2}>
        <h2 className={style.h2}>Você irá aprender </h2>
        <div className={style.ferramentas}>
            <div className={style.div}>
                <img src={operacoes} alt="" />
                <p>4 Operações Básicas</p>
            </div>
            <div className={style.div}>
                <img src={fracoes} alt="" />
                <p>Frações</p>
            </div>
            <div className={style.div}>
                <img src={porcentagem} alt="" />
                <p>Porcentagem</p>
            </div>
            <div className={style.div}>
                <img src={juros} alt="" />
                <p>Juros Simpes e Compostos</p>
            </div>
            <div className={style.div}>
                <img src={conjunto} alt="" />
                <p>Conjuntos </p>
            </div>
            <div className={style.div}>
                <img src={more} alt="" />
                <p>E muito mais </p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Main2;
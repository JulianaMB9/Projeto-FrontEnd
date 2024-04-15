import { Link } from "react-router-dom";
import magico from "../imgs/bruxa (1).png";
import explorador from "../imgs/explorador.png";
import foguete from "../imgs/criatividade.png";
import ilha from "../imgs/ilha.png";
import tesouro from "../imgs/tesouro.png";
import fada from "../imgs/fada.png";
import style from "./Opcoes.module.css";
import { ArrowFatLineDown,GlobeHemisphereWest } from "phosphor-react";

function Opcoes() {
  return (
    <div className={style.container}>
      <div className={style.inicio}>
        <h2> <GlobeHemisphereWest size={60} /> Bem-vindo ao Mundo da Matemática Divertida! </h2>
        <p>
          Você sabia que a matemática é como um quebra-cabeça gigante cheio de
          surpresas emocionantes esperando para serem descobertas? Aqui,
          queremos te convidar para uma jornada empolgante, onde números se
          transformam em aventuras e desafios se tornam momentos de diversão!
        </p>
        <p>
          Imagine-se explorando ilhas misteriosas cheias de problemas
          matemáticos para resolver, onde cada resposta certa é um passo em
          direção a um tesouro escondido. Ou embarcando em uma viagem através do
          espaço sideral, onde você usa equações para navegar pelas estrelas.
        </p>
        <p>
          Então, vamos lá! Pegue sua mochila da curiosidade e prepare-se para
          uma aventura matemática como nenhuma outra. Juntos, vamos explorar,
          aprender e nos divertir enquanto desvendamos os mistérios do mundo da
          matemática.
        </p>
      </div>
      <h2>
        Conheça os cursos <ArrowFatLineDown size={45} />
      </h2>

      <div className={style.cards}>
        <Link to="/Quatrooperacoes" className={style.link}>
          <div className={style.card}>
            <img src={magico} alt="" />
            <p>Descubra as Quatro Operações Mágicas da Matemática!</p>
          </div>
        </Link>
        <Link to="/Quatrooperacoes" className={style.link}>
          <div className={style.card}>
            <img src={explorador} alt="" />
            <p>Explorando o Mundo dos Conjuntos: Uma Aventura Fantástica!</p>
          </div>
        </Link>
        <Link to="/Quatrooperacoes" className={style.link}>
          <div className={style.card}>
            <img src={foguete} alt="" />
            <p>Navegando pelo Universo das Frações: Uma Aventura Espacial!</p>
          </div>
        </Link>
        <Link to="/Quatrooperacoes" className={style.link}>
          <div className={style.card}>
            <img src={ilha} alt="" />
            <p>
              Explorando a Ilha Misteriosa das Porcentagens: Uma Aventura
              Inesquecível!
            </p>
          </div>
        </Link>
        <Link to="/Quatrooperacoes" className={style.link}>
          <div className={style.card}>
            <img src={tesouro} alt="" />
            <p>
              Expedição Arqueológica em Busca dos Tesouros Perdidos: Uma Jornada
              pelos Juros!
            </p>
          </div>
        </Link>
        <Link to="/Quatrooperacoes" className={style.link}>
          <div className={style.card}>
            <img src={fada} alt="" />
            <p>
              Expedição pelos Reinos Mágicos em Busca dos Segredos Antigos: Uma
              Jornada pelo MMC e MDC!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Opcoes;

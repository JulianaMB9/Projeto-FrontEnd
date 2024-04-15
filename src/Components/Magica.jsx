import soma from "../imgs/Soma.png";
import subtracao from "../imgs/subtracao.png";
import divisao from "../imgs/divisao.png";
import multiplicacao from "../imgs/multiplicacao.png";
import star from "../imgs/star.png";
import doce from "../imgs/doce.jpg";
import moeda from "../imgs/moeda.jpg";
import bolo from "../imgs/bolo.jpg";

import style from "./Magica.module.css";
import Quiz from "../pages/Quiz/index";

// import Quiz from "./Quiz";

function Magica() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Descubra as Quatro Operações Mágicas da Matemática! &#127775; </h2>
        <p>
          Hoje vamos explorar um mundo cheio de magia e diversão:{" "}
          <strong> as quatro operações mágicas da matemática!</strong> Vamos
          embarcar nessa aventura emocionante e descobrir como adicionar,
          subtrair, multiplicar e dividir podem ser super legais!
        </p>
      </div>
      <div className={style.op}>
        <h3>Adição: O Feitiço da Soma </h3>
        <div className={style.des}>
          <img className={style.mag} src={soma} alt="" />

          <p>
            Imagine que você é um mago poderoso e pode juntar números como se
            fossem ingredientes mágicos! Com a adição, você pode combinar dois
            ou mais números e descobrir quanto eles valem juntos.
            <br /> <br />
            Por exemplo, se você tem 2 estrelinhas brilhantes e adiciona mais 3
            estrelinhas, quantas estrelinhas brilhantes você terá no total?
            Vamos descobrir juntos!
          </p>
        </div>
        <div className={style.res}>
         

          <p>
            Um, dois... somamos as duas estrelinhas que já tínhamos. Agora,
            vamos adicionar mais três estrelinhas. Então, um, dois, três...
            pronto! Agora temos cinco estrelinhas brilhantes no total! Legal,
            né? É assim que a matemática é divertida!
          </p>
          <img className={style.ex} src={star} alt="" />
        </div>
      </div>
      <div className={style.op}>
        <h3>Subtração: O Feitiço da Magia Inversa </h3>
        <div className={style.des}>
          <img className={style.mag} src={subtracao} alt="" />

          <p>
            {" "}
            Agora, vamos praticar o feitiço da subtração! Com essa magia
            especial, você pode tirar números de outros números e descobrir
            quanto sobra.
            <br />
            <br />
            Por exemplo, se você tem 7 doces deliciosos e come 3 deles, quantos
            doces você terá depois de comer? Vamos fazer essa mágica acontecer!
          </p>
        </div>
        <div className={style.res}>
          

          <p>
            Vamos contar... um, dois, três... esses são os doces que você comeu.
            Agora, vamos ver quantos doces ainda restam. Quatro, cinco, seis,
            sete... legal! Você ainda tem quatro doces deliciosos para saborear
            depois de comer três. Não é incrível? A matemática nos ajuda a
            resolver esses pequenos mistérios e fazer essas mágicas acontecerem!
          </p>
          <img className={style.ex} src={doce} alt="" />
        </div>
      </div>
      <div className={style.op}>
        <h3>Multiplicação: O Feitiço da Repetição </h3>
        <div className={style.des}>
          <img className={style.mag} src={multiplicacao} alt="" />

          <p>
            Hora de aprender um feitiço incrível chamado multiplicação! Com esse
            poder mágico, você pode fazer grupos de números e descobrir quanto
            eles valem no total.
            <br /> <br />
            Por exemplo, se você tem 3 sacolas de tesouros com 5 moedas em cada
            sacola, quantas moedas você terá no total? Prepare sua varinha
            mágica e vamos multiplicar!
          </p>
        </div>
        <div className={style.res}>
          

          <p>
            Vamos começar a multiplicar... 5 moedas em uma sacola vezes 3
            sacolas... um, dois, três... é igual a quinze moedas no total!
            Incrível, né? Com um pouco de matemágica, podemos descobrir grandes
            tesouros!
          </p>
          <img className={style.ex} src={moeda} alt="" />
        </div>
      </div>
      <div className={style.op}>
        <h3>Divisão: O Feitiço da Partilha</h3>
        <div className={style.des}>
          <img className={style.mag} src={divisao} alt="" />

          <p>
            Por último, mas não menos importante, vamos aprender o feitiço da
            divisão! Com essa magia, você pode dividir um monte de coisas entre
            seus amigos de maneira justa e igual.
            <br />
            <br />
            Por exemplo, se você tem 12 bolinhos deliciosos e quer compartilhar
            com 4 amigos, quantos bolinhos cada amigo receberá? Vamos fazer essa
            mágica de partilha acontecer!
          </p>
        </div>
        <div className={style.res}>
          

          <p>
            Vamos dividir o total de bolinhos, que são 12, pelo número de
            amigos, que são 4. É só contar! Um bolinho para o amigo número um,
            outro para o número dois, mais um para o número três e, por fim, o
            quarto bolinho. Depois, voltamos e repetimos até que todos os
            bolinhos tenham sido distribuídos. Contando assim, cada amigo vai
            receber 3 bolinhos deliciosos! Uau, que legal! Agora, todos podem
            desfrutar dessas gostosuras juntos. A matemática da partilha é uma
            mágica incrível!
          </p>
          <img className={style.ex} src={bolo} alt="" />
        </div>
      </div>

      <div> 
        <h3>Agora vamos praticar ? </h3>
       <Quiz/>
      </div>

      <div>
        <h3>Saiba mais: </h3>

        <iframe
        title="example-iframe"
        width="500"
        height="300"
        src="https://www.youtube.com/watch?v=JbSSjU6yyHY"
       
      ></iframe>
      </div>

  
    </div>
  );
}

export default Magica;

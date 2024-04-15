import "./styles.css";
import { Perguntas } from "../../data/perguntas";
import { useState } from "react";

export default function Quiz() {
  const questions = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);

  function proximaPergunta(correta) {
    const nextQuestion = perguntaAtual + 1;

    if (correta) {
      setPontos(pontos + 1);
    }

    if (nextQuestion < questions.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      setShowPontuacao(true);
    }
  }

  function reiniciarQuiz() {
    setPerguntaAtual(0);
    setShowPontuacao(false);
    setPontos(0);
  }

  return (
    <div className="container">
      {showPontuacao ? (
        <div className="pontuacao">
          <span>
            Sua pontuação é {pontos} de {questions.length}
          </span>
          <button  className="Botao" onClick={reiniciarQuiz}>Reiniciar</button>
        </div>
      ) : (
        <>
          <div className="infoPerguntas">
            <div className="contagemPerguntas">
              <span>
                Pergunta {perguntaAtual + 1}/{questions.length}
              </span>
            </div>
            <div className="pergunta">{questions[perguntaAtual].pergunta}</div>
          </div>
          <div className="resposta">
            {questions[perguntaAtual].opcoesResposta.map((opcoesResposta, index) =>
              <div className="grupoResposta" key={index}>
                <span>{opcoesResposta.alternativa}</span>
                <button className="Botao" onClick={() => proximaPergunta(opcoesResposta.correta)}>{opcoesResposta.resposta}</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

import Header from "./Header";
import Main3 from "./Main3";
import style from "./QuatroOperacoes.module.css";

import Sidebar from "./Sidebar"
import Magica from "./Magica";

function QuatroOperacoes() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <Magica />
      </div>
      <Main3 />
    </div>
  );
}

export default QuatroOperacoes;

import { useState } from "react";
import {User, Envelope, Phone,Password} from "phosphor-react"
import { Link } from "react-router-dom";
import style from "./Login.module.css"

const Login = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [LoginStarted, setLoginStarted] = useState(false);

  // Função para dar início ao desafio
  const handleStartLogin = () => {
    if (nome && telefone && email && senha) {
      setLoginStarted(true); 
    }
  };

  return (
    <div className={style.container}>
      <form>
        <div className="mb-3">
          <div className={style.icon}>
          <User size={32} />
            <label htmlFor="nome" className="nome">
              Nome
            </label>
          </div>

   
          <div className="col-sm-10">
            <input
              type="text"
              className="htmlForm-control"
              id="nome"
              name="nome"
              required
              readOnly={LoginStarted}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className={style.icon}>
          <Envelope size={32} />

          <label htmlFor="email" className="email">
            Email
          </label>
          </div>

          <input
            type="email"
            className="htmlForm-control"
            id="email"
            name="email"
            required
            readOnly={LoginStarted}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className={style.icon}>
          <Phone size={32} />
            <label htmlFor="telefone" className="telefone">
              Telefone
            </label>
          </div>

          <input
            type="text"
            className="htmlForm-control"
            id="telefone"
            name="telefone"
            required
            readOnly={LoginStarted}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className={style.icon}>
          <Password size={32} />
            <label htmlFor="senha" className="senha">
              Senha
            </label>
          </div>

          <input
            type="password"
            className="senha"
            id="senha"
            name="senha"
            required
            readOnly={LoginStarted}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
      </form>

  
        <Link to="/menu"> 
          <button className={style.button}
            disabled={!nome || !telefone || !email || !senha}
            onClick={handleStartLogin}
          >
            Cadrastrar
          </button>
     </Link>

    </div>
  );
};

export default Login;

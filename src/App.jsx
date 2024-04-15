import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Principal from "./Components/Principal";
import Menu from "./Components/Menu";
import QuatroOperacoes from "./Components/QuatroOperacoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/quatrooperacoes" element={<QuatroOperacoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

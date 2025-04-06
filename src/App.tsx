import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./screens/Login";
import { Medico } from "./screens/Medico";
import { Funcionario } from "./screens/Funcionario";
import { Stock } from "./screens/Stock";
import { Prescripciones } from "./screens/Prescripciones";
import { Reserva } from "./screens/Reserva";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/medico" element={<Medico />} />
        <Route path="/funcionario" element={<Funcionario />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/prescripciones" element={<Prescripciones />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </Router>
  );
}

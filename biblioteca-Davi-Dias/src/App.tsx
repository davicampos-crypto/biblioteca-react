import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Aulas from "./pages/aulas";
import Desenvolvedor from "./pages/Desenvolvedor";
 
//** Novo app.tsx
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aulas" element={<Aulas />}/>
        <Route path="/desenvolvedor" element={<Desenvolvedor />}/>

      </Routes>
    </BrowserRouter>
  )
}
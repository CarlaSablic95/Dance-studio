import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Niños from "./pages/Niños/Niños";
import Adolescentes from "./pages/Adolescentes/Adolescentes";
import Jovenes from "./pages/Jovenes/Jovenes";
import Contacto from "./pages/Contacto/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/clases/niños" element={<Niños />}></Route>
          <Route path="/clases/adolescentes" element={<Adolescentes />}></Route>
          <Route path="/clases/jovenes" element={<Jovenes />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

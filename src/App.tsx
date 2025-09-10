import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHorizontal from "./components/navbar/NavbarHorizontal.tsx";
import NavbarVertical from "./components/navbar/NavbarVertical.tsx";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
    return (
        <BrowserRouter>
            {/* Navbar Horizontal sempre no topo */}
            <NavbarHorizontal />

            <div style={{ display: "flex" }}>
                {/* Navbar Vertical do lado esquerdo */}
                <NavbarVertical />

                {/* Conteúdo das páginas */}
                <div style={{ flex: 1, padding: "20px" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/funcionarios" element={<h1>Funcionários</h1>} />
                        <Route path="/cadastro" element={<h1>Cadastro</h1>} />
                    </Routes>
                </div>
            </div>

            <Footer />
        </BrowserRouter>
    );
}

export default App;


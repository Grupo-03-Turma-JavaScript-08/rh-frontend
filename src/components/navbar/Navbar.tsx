import { NavLink } from "react-router-dom";
import "../../app.css";

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="logo">RH</div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" className={({ isActive }) => (isActive ? "active" : "")}>
                                Sobre nós
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/funcionarios" className={({ isActive }) => (isActive ? "active" : "")}>
                                Funcionários
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cadastro" className={({ isActive }) => (isActive ? "active" : "")}>
                                Cadastro
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

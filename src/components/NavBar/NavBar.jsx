import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="Nav-bar-red">
        <h1>La República</h1>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="linkNav">
              {" "}
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/elecciones" className="linkNav">
              {" "}
              Elecciones 2022
            </Link>
          </li>
          <li className="nav-item">
            <Link to="*" className="linkNav">
              {" "}
              Más
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

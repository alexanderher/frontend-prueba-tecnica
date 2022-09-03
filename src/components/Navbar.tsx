import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div
          style={{ cursor: "pointer" }}
          className="nav-link active"
          onClick={() => navigate("../", { replace: true })}
        >
          Laboratorio
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                style={{ cursor: "pointer" }}
                className="nav-link active"
                onClick={() => navigate("../list/user", { replace: true })}
              >
                Lista de personas
              </div>
            </li>
            <li className="nav-item">
              <div
                style={{ cursor: "pointer" }}
                className="nav-link active"
                onClick={() => navigate("../create/user", { replace: true })}
              >
                Agregar Persona
              </div>
            </li>
            <li className="nav-item">
              <div
                style={{ cursor: "pointer" }}
                className="nav-link active"
                onClick={() => navigate("../list/rule", { replace: true })}
              >
                Lista de reglas
              </div>
            </li>
            <li className="nav-item">
              <div
                style={{ cursor: "pointer" }}
                className="nav-link active"
                onClick={() => navigate("../create/rule", { replace: true })}
              >
                Agregar regla
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

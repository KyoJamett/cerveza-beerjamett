import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <HashLink smooth to="#home" className="navbar-brand">
              <img
                src="images/logo.png"
                alt="BeerJamett"
                className="navbar-logo"
              />
            </HashLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <HashLink
                    className="nav-item nav-link active"
                    smooth
                    to="#home"
                  >
                    Home <span className="visually-hidden">(current)</span>
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-item nav-link" smooth to="#aboutUs">
                    {" "}
                    Quienes Somos
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-item nav-link" smooth to="#products">
                    Cervezas
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-item nav-link" smooth to="#clients">
                    Nuestros clientes
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-item nav-link" smooth to="#contact">
                    Contacto
                  </HashLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

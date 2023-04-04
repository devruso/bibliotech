import "./Menu.css";
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import logoIcon from "./../../assets/icons/livros.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

export function Menu() {
  const navigate = useNavigate();
  const user = useContext(AuthContext)
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  if (temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }

  function onLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <Navbar   className="navbar"     bg={temaEscuro ? "dark" : "success"}
      variant={temaEscuro ? "dark" : "light"} expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link  to="/">
            <img src={logoIcon} width="32" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link className="d-flex align-items-center"  as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center"  as={Link} to="/livros">
            Livros
            </Nav.Link>
            <Nav.Link as={Link} to="/chat" className="d-flex align-items-center">
              Chat
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center"  as={Link} to="/emprestimos">
              Emprestimos
            </Nav.Link>
            <Nav.Link  className="d-flex align-items-center"  as={Link} to="/quiz">
              Quiz
            </Nav.Link>

            <Button className="d-flex align-items-center" variant="outline-light" onClick={alternar}>
              <img src={iconeBtn} width="16" alt="" />
              Alternar
            </Button>
            
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Perfil de {user.displayName}</Tooltip>}>
            <Nav.Link className="d-flex align-items-center"  as={Link}  to="/perfil/usuario">
              <img src={user.photoURL} className="foto-perfil-nav" alt="" />
            </Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Logout</Tooltip>}>
              <Nav.Link className="d-flex align-items-center margim-left"  onClick={onLogout}>
                <i className="bi bi-box-arrow-right"></i>
              </Nav.Link>
            </OverlayTrigger>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

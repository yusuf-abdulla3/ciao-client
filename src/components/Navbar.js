import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/tooplate-style.css";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import { Navbar, Button, Nav, Container } from "react-bootstrap";

export default function Navbarpage(props) {
  const { loginStatus, firstName, setLoginStatus, userId, sentCards } = props;
  const history = useHistory();
  const loggedOut = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/logout/`;
    axios
      .get(url, { withCredentials: true })
      .then((res) => {
        setLoginStatus(false);
        localStorage.removeItem("userId");
      })
      .catch((e) => console.log("err", e));
    history.push("/");
  };

  return (
    <div>
      <Navbar className="nav-color navbar" variant="dark">
        <Container className="d-flex">
          <div className="d-flex">
            <Navbar.Brand href="#home">Ciao</Navbar.Brand>
          </div>
          <div className="d-flex">
            <Nav className="me-auto">
              <div className="d-flex">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/createcard">Create Card</Nav.Link>
                {loginStatus && (
                  <>
                    <Nav.Link href="/sent/" onClick={sentCards}>
                      List
                    </Nav.Link>
                    <Nav.Link variant="outline-dark" onClick={loggedOut}>
                      Logout
                    </Nav.Link>
                  </>
                )}
              </div>
              <div className="d-flex">
                {loginStatus && (
                  <Navbar.Text>Hi {firstName}!</Navbar.Text>
                )}

                {!loginStatus && (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                  </>
                )}
              </div>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

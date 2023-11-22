import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assests/logo.png";
import styles from "./header.module.css";
import { Link  , NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css"

const Header = ({ fixed }) => {

  const navigate = useNavigate();
  var user;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.log(error);
  }


  const signout = () => {
   
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if(confirmLogout){
      localStorage.removeItem("user");
      navigate("/signin")
    }
  }

  return (
    <Navbar expand="lg"  fixed={fixed ? "top" : ""}>
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            <img src={logo} alt="" width={200} height={50} />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`mx-auto my-2 my-lg-0  ${styles.linkBox} `}  >

          <Nav.Link  >
              {" "}
              <NavLink
                to={"/"}
                className="fs-5  text-decoration-none"
              >
                {" "}
                Home{" "}
              </NavLink>{" "}
            </Nav.Link>
            {user && (
              <Nav.Link>
                {" "}
                <NavLink
                  to={"/courses"}
                  className="  fs-5  text-decoration-none"
                >
                  {" "}
                  Courses{" "}
                </NavLink>{" "}
              </Nav.Link>
            )}
            <Nav.Link>
              {" "}
              <NavLink
                to={"/about"}
                className="  fs-5  text-decoration-none"
              >
                {" "}
                About{" "}
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <NavLink
                to={"/contact"}
                className="  fs-5  text-decoration-none"
              >
                {" "}
                Contact{" "}
              </NavLink>{" "}
            </Nav.Link>
          </Nav>
          {user ? (
            <div className="d-flex">
              <img
                src={user.photo}
                alt="User Avatar"
                className="rounded-circle mr-3 "
                style={{ width: 40, height: 40, objectFit: "cover" }}
              />
              <Dropdown className={`mr-3   ${styles.dropdownBox}  `}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className={`mr-3 ${styles.dropdownBody} `}
                >
                  {user.name.toUpperCase()}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={signout}  > Logout </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ): (

          <div className="d-flex">
            <Link to={"/signin"}  >    <button type="button" className= {`btn btn-success ${styles.signinBtn}` }   >
              Sign in
            </button> </Link>  
            <Link to={"/signup"} > 
            <button type="button" className= {`btn mx-2 btn-outline-success ${styles.signupBtn}` }   >
              Sign up
            </button> </Link>
          </div>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

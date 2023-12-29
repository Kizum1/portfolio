import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Kizum1" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/jaeyoon-chong/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://leetcode.com/kizum1/" target="_blank" rel="noopener noreferrer"><SiLeetcode size={20} color="#FFF" /></a>
            </div>
            <p>Jae Yoon Chong</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// Removed Router and Link imports since they're not used for in-page scrolling

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveLink(sectionId);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Jae Yoon Chong | CSE @ DVC </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('education')} className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}>Education/Experience</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/assets/Jae_Yoon_Chong_Resume.pdf`} target="_blank" rel="noopener noreferrer" download className='navbar-link'>Resume 🔗</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

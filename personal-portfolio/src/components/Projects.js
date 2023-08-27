import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp1 from "../assets/img/color-sharp.png";
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: "Viking Hacks Website",
      description: "Website for Viking Hacks 2023",
      Tags: "HTML, CSS, Javascript",
      imgUrl: projImg1,
    },
    {
      title: "Notion Reminder Bot",
      description: "Discord bot that sends reminders from Notion to Discord",
      Tags: "Discord JS, Javascript, Notion API",
      imgUrl: projImg5,
    },
    {
      title: "VReader",
      description: "VR book reader for the Oculus Quest 2",
      Tags: "Lua, Roblox Studios",
      imgUrl: projImg2,
    },
    {
      title: "Worldview Wanderer",
      description: "Destination Viewer with local cuisine and music.",
      Tags: "Python, Pygame",
      imgUrl: projImg4,
    },
    {
      title: "WhoIntedMe",
      description: "Full Stack Web Application for analyzing data from League of Legends",
      Tags: "React, Flask, Tailwind, Python, SQLite, Javascript",
      imgUrl: projImg3,
    },
    {
      title: "Google Developers Website",
      description: "Website for DVC Developers",
      Tags: "HTML, CSS, Javascript",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects</h2>
              <p>This is a catalogue of all the projects I have contributed to. I primarily work on the frontend, however I have dabbled in other areas such as modeling, and bot development.</p>
              <Row>
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp1} alt="" />
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

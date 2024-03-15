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
      githubUrl: "https://github.com/Kizum1/vikinghacks"
    },
    {
      title: "Notion Reminder Bot",
      description: "Discord bot that sends reminders from Notion to Discord",
      Tags: "Discord JS, Javascript, Notion API",
      imgUrl: projImg5,
      githubUrl: "https://github.com/pluffpenguin/Notion-Deadline-Reminder-Bot"
    },
    {
      title: "VReader",
      description: "VR book reader for the Oculus Quest 2",
      Tags: "Lua, Roblox Studios",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Kizum1/VReader"
    },
    {
      title: "Worldview Wanderer",
      description: "Destination Viewer with local cuisine and music.",
      Tags: "Python, Pygame",
      imgUrl: projImg4,
      githubUrl: "https://github.com/TeachMeTW/WorldView-Wanderer"
    },
    {
      title: "Wind Density Modeler",
      description: "Simulates stellar accretion disk winds, calculating the wind density",
      Tags: "Python, Jupyter Notebook",
      imgUrl: projImg3,
      githubUrl: "https://github.com/K1zum1/Disc-Wind-Density-Program"
    },
    {
      title: "GDSC Website",
      description: "Website for DVC Developers",
      Tags: "HTML, CSS, Javascript",
      imgUrl: projImg6,
      githubUrl: "https://github.com/Kizum1/gdscwebsite"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects</h2>
              <p>Here are some projects I have worked on</p>
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

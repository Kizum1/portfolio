import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/hero.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
 // Initialize state variables to manage the text animation
const [loopNum, setLoopNum] = useState(0); // Keeps track of the current iteration
const [isDeleting, setIsDeleting] = useState(false); // Indicates if text is being deleted
const [text, setText] = useState(""); // The current text displayed
const [delta, setDelta] = useState(100); // The delay between each animation step
const toRotate = [
  "CSE Sophomore",
  "Frontend Developer",
  "Cybersecurity Fanatic",
]; // Array of strings to rotate through
const period = 1000; // The duration of a full text cycle

// Set up an effect that triggers the animation loop
useEffect(() => {
  // Set up a ticker to call the 'tick' function with the specified delay
  let ticker = setInterval(() => {
    tick();
  }, delta);

  // Clean up by clearing the interval when the 'text' state changes
  return () => {
    clearInterval(ticker);
  };
}, [text]);

// Function to handle each step of the text animation
const tick = () => {
  let i = loopNum % toRotate.length; // Get the current string index to display
  let fullText = toRotate[i]; // Get the full string at the current index
  let updatedText = isDeleting
    ? fullText.substring(0, text.length - 1) // Delete one character if 'isDeleting' is true
    : fullText.substring(0, text.length + 1); // Add one character if not deleting

  setText(updatedText); // Update the displayed text

  // Adjust the animation speed if deleting
  if (isDeleting) {
    setDelta((prevDelta) => prevDelta / 2); // Double the animation speed while deleting
  }

  // Switch to deleting mode when the full text is displayed
  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setDelta(period); // Set delay to the 'period' for a pause while text is fully displayed
  } else if (isDeleting && updatedText === "") {
    // Switch back to adding mode when text is fully deleted
    setIsDeleting(false);
    setLoopNum(loopNum + 1); // Move to the next string index
    setDelta(100); // Reset the delay for the next iteration
  }
};


  return (
    <section className="banner" id="home">
      <Container>
      <Row>
          <Col xs={12} md={6} xl={7} className="align-self-center">
            <div className="animate__animated animate__fadeIn">
              <h1>
                {`Hi! I'm Jay`}
                <br />
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='["Sophomore Student", "Frontend Developer", "Cybersecurity Fanatic"]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <tsParticle />
              <p></p>
              <button onClick={() => console.log("connect")}>
                Reach out
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="align-self-center">
            <div className="animate__animated animate__zoomIn">
              <img
                src={headerImg}
                alt="Header Img"
                style={{ border: "none", outline: "none" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

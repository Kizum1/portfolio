import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const toRotate = ["Computer Engineering Sophmore", "Frontend Enthusiast", "Cybersecurity Aspirant"];
  const period = 1000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta((prevDelta) => period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta((prevDelta) => 100);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum, setIsDeleting, setDelta, setText, setLoopNum]);

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
                  data-rotate='["Computer Engineering Sophmore", "Frontend Enthusiast", "Cybersecurity Aspirant"]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

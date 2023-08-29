import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Yale from '../assets/img/yale.png';
import DVC from '../assets/img/dvc.png';
import UCB from '../assets/img/ucb.png';

export const EduTimeline = () => {
  return (
    <div className="timeline-container">
      <section className='project'><h2>My Education</h2></section>
    <VerticalTimeline>
      <VerticalTimelineElement
        id="education"
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#5E92F3', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #5E92F3' }}
        date="2018 - 2022"
        iconStyle={{ background: '#5E92F3', color: '#fff' }}
        icon={<img src={Yale} alt="Yale Logo" />}
      >
        <h3 className="vertical-timeline-element-title">High School</h3>
        <h5 className="vertical-timeline-element-subtitle">Yale Secondary</h5>
        <p>
          Dogwood Diploma <br />
          Palo Alto Networks Academy <br />
          94% Average <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#FF9A8B', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #FF9A8B' }}
        date="2022 - 2024"
        iconStyle={{ background: '#FF9A8B', color: '#fff' }}
        icon={<img src={DVC} alt="DVC Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Community College Student</h3>
        <h5 className="vertical-timeline-element-subtitle">Diablo Valley College</h5>
        <p>
          Associates of Computer Engineering <br />
          GDSC Lead <br />
          Academic Honors: 4.0 GPA <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#68C7D1', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #68C7D1' }}
        date="2024 - 2026"
        iconStyle={{ background: '#68C7D1', color: '#fff' }}
        icon={<img src={UCB} alt="UCB Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Undergraduate Student</h3>
        <h5 className="vertical-timeline-element-subtitle">X City, X State</h5>
        <p>
          Bachelors of Electrical Engineering & Computer Science <br />
          X Company Intern <br />
          X GPA <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#68C7D1', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #68C7D1' }}
        date="2026-2027"
        iconStyle={{ background: '#68C7D1', color: '#fff' }}
        icon={<img src={UCB} alt="UCB Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Graduate Student</h3>
        <h5 className="vertical-timeline-element-subtitle">X City, X State</h5>
        <p>
          Masters of Cybersecurity <br />
          X Research <br />
          X Company Intern <br />
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline></div>
  );
};

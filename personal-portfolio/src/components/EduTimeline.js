import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pan from '../assets/img/pan.png';
import DVC from '../assets/img/dvc.png';
import UCB from '../assets/img/ucb.png';
import cp from '../assets/img/cp.png';
import seti from '../assets/img/seti.jpg';

export const EduTimeline = () => {
  return (
    <div className="timeline-container">
      <section className='project'><h2>Education & Experiences</h2></section>
    <VerticalTimeline>
      <VerticalTimelineElement
        id="education"
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#3B5998', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #3B5998' }}
        date="2021 - 2022"
        iconStyle={{ background: '#3B5998', color: '#fff' }}
        icon={<img src={pan} alt="Yale Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Cybersecurity Bootcamp</h3>
        <h5 className="vertical-timeline-element-subtitle">Palo Alto Networks - Remote </h5>
        <p>
          Simulated breaches in virtual environments <br />
          Proficient in Strata, Prisma, and Cortex automation <br />
          PCCET certified for entry-level cybersecurity per NIST <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#9C27B0', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #FF9A8B' }}
        date="2022 - 2024"
        iconStyle={{ background: '#FF9A8B', color: '#fff' }}
        icon={<img src={DVC} alt="DVC Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Community College Student</h3>
        <h5 className="vertical-timeline-element-subtitle">Diablo Valley College - Pleasant Hills, CA </h5>
        <p>
          Started my associates of science in computer engineering <br />
          Became the Google Developers Student Lead after a year <br />
          Completed all required classes with a 4.0 GPA <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2196F3', color: '#ffffff' }}
        contentArrowStyle={{ borderRight: '7px solid #68C7D1' }}
        date="2023"
        iconStyle={{ background: '#68C7D1', color: '#fff' }}
        icon={<img src={cp} alt="CodePath Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Intermediate Cybersecurity Student</h3>
        <h5 className="vertical-timeline-element-subtitle">CodePath Org - Remote</h5>
        <p>
        SOC operations, incident handling, threat analysis expertise. <br />
        Proficient in endpoint monitoring, log analysis, network security. <br />
        Skilled in threat intelligence sharing with frameworks <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#4CAF50', color: '#ffffff' }}
        contentArrowStyle={{ borderRight: '7px solid #68C7D1' }}
        date="2024-2025"
        iconStyle={{ background: '#68C7D1', color: '#fff' }}
        icon={<img src={seti} alt="CodePath Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Incoming Research Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">SETI Institute - Mountain View, CA</h5>
        <p>
        Working with Dr. Gorti on Star and Planet Formation research <br />
        Using Python for advanced data analysis <br />
        Using NASA equipment to analyze protoplanetary disks <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#E91E63', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #68C7D1' }}
        date="2024 - 2026"
        iconStyle={{ background: '#68C7D1', color: '#fff' }}
        icon={<img src={UCB} alt="UCB Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Undergraduate/Graduate Student</h3>
        <h5 className="vertical-timeline-element-subtitle">UC Berkeley - Berkeley, CA</h5>
        <p>
          On track to transfer to UC Berkeley <br />
          
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline></div>
  );
};

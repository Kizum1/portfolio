import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const EduTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#5E92F3', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #5E92F3' }}
        date="09/2018 - 06/2022"
        iconStyle={{ background: '#5E92F3', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Yale Secondary</h3>
        <h4 className="vertical-timeline-element-subtitle">Abbotsford, BC</h4>
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
        date="08/2022 - 05/2024"
        iconStyle={{ background: '#FF9A8B', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Diablo Valley College</h3>
        <h4 className="vertical-timeline-element-subtitle">Pleasant Hill, CA</h4>
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
        date="Future"
        iconStyle={{ background: '#68C7D1', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Future 4 year institution</h3>
        <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
        <p>
          Bachelors of Computer Science <br />
          Masters in Cybersecurity <br />
          XCompany Intern <br />
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

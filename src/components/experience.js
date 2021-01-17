import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <VerticalTimeline layout="2-columns" className="vertical-timeline-custom-line">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(255, 220, 200)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 220, 200)' }}
        date="January 2020 - Present"
        position="left"
        iconStyle={{ background: 'rgb(255, 220, 200)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Constant Contact</h4>
        <p>
          I&apos;m currently a software engineering intern at Constant Contact, where I&apos;m working with React, Javascript, Springboot and Java to help build out the customer-facing
          billing UI.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(240, 240, 240)' }}
        date="September 2020 - December 2020"
        position="right"
        iconStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
      >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Digital Applied Learning and Innovation (DALI) Lab</h4>
        <p>
          I worked as a software developer alongside designers, product managers, and partners to create an Alexa Skill for the New Hampshire Public Radio Civics 101 Podcast team. The skill, NHPR
          Civics, is a quiz game that allows people to test their civics knowledge and learn more about civics topics.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(240, 240, 240)' }}
        date="March 2019 - June 2020"
        position="left"
        iconStyle={{ background: 'rgb(240, 240, 240)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Dartmouth College Department of Computer Science</h4>
        <p>
          I was a teaching assistant for the introductary computer science class for 3 terms. I led 10 students in weekly recitations, held weekly office hours to help students understand content and
          assignments, and graded students&apos; assignments and exams.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(240, 240, 240)' }}
        date="June 2019 - August 2019"
        position="right"
        iconStyle={{ background: 'rgb(240, 240, 240)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">BNY Mellon Data and Analytics</h4>
        <p>
          I collaborated with 4 interns to build a machine learning and language processing web application to analyze 38 employees’ interview audio and visualize employees’ sentiments about company
          culture. I also automated security incident reports by building a data pipeline so that executives and client-facing employees could interact with real-time data. I enhanced data with Ruby
          and designed visualizations in Power BI.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(240, 240, 240)' }}
        date="January 2019 - June 2019"
        position="left"
        iconStyle={{ background: 'rgb(240, 240, 240)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Research Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">The Dartmouth Institute of Health and Clinical Policy </h4>
        <p>
          I independently designed an iOS app to interactively guide future interns through annotating clinical data. I ran Moonstone (an NLP system) to determine the readmission rates for
          heart attack patients and revised annotation rules for clarity.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Experience;

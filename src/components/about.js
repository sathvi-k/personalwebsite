import React from 'react';
import me from '../img/sathvika.jpg';

const ReactRotatingText = require('react-rotating-text');

const About = () => {
  return (
    <div>
      <div className="about">
        <h1>Hi! I&apos;m Sathvi.</h1>
        <div className="rolling">I&apos;m a <ReactRotatingText items={['software developer!', 'music lover!', 'trivia fan!']} color="orange" /></div>
      </div>

      <div className="picture">
        <img alt="me" src={me} />
      </div>

      <div className="intro">
        <p>I&apos;m a &apos;22 (junior) at Dartmouth College studying <span className="under">Computer Science.</span> I&apos;m interested
          in <span className="under">software development,</span> whether it&apos;s front-end, back-end, or full-stack development! Additionally, I found a love for numbers
          and patterns through math while growing up, which has transformed into my interest in <span className="under">machine learning</span> and <span className="under">data science.</span> At
          Dartmouth, I&apos;m a developer in the <span className="under">DALI Lab,</span>
          on the Executive Board of <span className="under"> Women in Computer Science (WiCS),</span> and Co-Director of Humans of Dartmouth. In my free time,
          I enjoy learning about product design, reading about art history, making <span className="under">Spotify playlists,</span> and trying out new productivity
          tech/tools.
        </p>
      </div>
      <div className="skills">
        Languages & Tools I have experience with:
        <div className="alltags">
          <div className="tag">Python</div>
          <div className="tag">Java</div>
          <div className="tag">Javascript</div>
          <div className="tag">HTML/CSS</div>
          <div className="tag">React</div>
          <div className="tag">Node</div>
          <div className="tag">Express</div>
          <div className="tag">SQL</div>
          <div className="tag">MongoDB</div>
          <div className="tag">Firebase</div>
          <div className="tag">Git/Bash</div>
          <div className="tag">C</div>
        </div>
      </div>

    </div>

  );
};

export default About;

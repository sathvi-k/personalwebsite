/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Project from './project';
import notes from '../img/notes.jpg';
import music from '../img/music.jpg';
import aptitune from '../img/aptitune.gif';
import smartvote from '../img/smartvote.png';
import ecoconscious from '../img/ecoconscious.jpg';
import giftn from '../img/giftn.jpg';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Check out some of my projects!</h2>
        <div className="projects-area">
          <div className="project-container">
            <div className="project-name">
              Giftn
            </div>
            <div className="project-tagline">
              Holiday gift-shopping without the stress
            </div>
            <div className="project-pic">
              <img alt="music" src={giftn} />
            </div>
            <Project
              title="Giftn"
              content="I competed in HackUMass VIII and Winter Hacklympics with 3 friends, and we built Giftn in the course of 36 hours. Giftn won Best Financial Hack at HackUMass and Best Overall
              Hack at Winter Hacklympics. Giftn consists of a web-app and a Chrome extension that helps users manage their gift-buying during the holiday season. The Chrome extension helps
              users add a product on Amazon for a certain person on their gift list, and the web-app allows users to manage their gift lists for everyone they're buying gifts for. Our goal was
              to make a fun application that involved holiday spirit and would help people reduce any gift-giving stress. I built the Chrome extension, which allows users to add Amazon products
              to their gift list for their friends and family."
              tools="React.JS, Redux, Express.JS, Node.JS, Javascript, Firestore, Google Cloud"
            />
          </div>
          <div className="project-container">
            <div className="project-name">
              EcoConscious Tech
            </div>
            <div className="project-tagline">
              Be environmentally conscious
            </div>
            <div className="project-pic">
              <img alt="music" src={ecoconscious} />
            </div>
            <Project
              title="EcoConscious Tech"
              content="I competed in HackDuke: Code for Good with 3 friends, and in 30 hours, we built EcoConscious Tech, which won the Wolfram Prize and 2nd place prize in the Energy/Environment
              Track. EcoConscious Tech consists of the Carbon Emissions Monitor VSCode extension, the Green Web Google Chrome Extension, and the EcoConscious Tech Web App. The Carbon Emissions Monitor
              VSCode extension helps developers become aware of the carbon they emit while running code, encouraging them to write code with less run-time that is better for the planet.
              The Green Web Google Chrome Extension guides users to be more eco-friendly by notifying them when a website they visit is run on renewable energy or not. Finally, the
              EcoConscious Tech Web App centralizes all of these features, allowing a user to see their own environmental impact on the planet. The EcoConscious Tech Web App first
              features information about the tech industry's mass production of carbon emissions, and how we as developers and regular internet-users do not realize the carbon emissions we
              add to the world. It allows users to sign-in through Google Authentication to see visualized statistics about their impact."
              tools="React.JS, Redux, Express.JS, Node.JS, Javascript, Typescript, Firestore, Google Cloud"
            />
          </div>
          <div className="project-container">
            <div className="project-name">
              SmartVote
            </div>
            <div className="project-tagline">
              Find local election candidates you match with
            </div>
            <div className="project-pic">
              <img alt="music" src={smartvote} />
            </div>
            <Project
              title="SmartVote"
              content="I teamed up with 3 friends to compete in IvyHacks, and over 48 hours we built SmartVote, which won the 1st place prize for Best Overall Hack and 2nd place for the IBM API Prize.
              SmartVote is a web-app that analyzes a voter's values and needs, uses their location to find out which local elections are happening, and matches
              the voter to local election candidates that meet the voter's needs and values. Our goal was to help people voting in local elections find candidates that aligned with themselves,
              as local elections are often overlooked, due to people being confused by the large number of positions and candidates running, even though it is just as important
              as the general election. I enjoyed diving into new APIs from Twitter, IBM Watson, and Google, exploring web scraping,
              and overall has a blast developing this project over a single weekend. I'm definitely looking forward to my next hackathon!"
              tools="React.JS, Redux, Express.JS, Node.JS, Javascript, Firestore, Google Cloud"
            />
          </div>
          <div className="project-container">
            <div className="project-name">
              <a href="https://aptitune.surge.sh/">AptiTune</a>
            </div>
            <div className="project-tagline">
              Learning music made fun
            </div>
            <div className="project-pic">
              <img alt="music" src={aptitune} />
            </div>
            <Project
              title="AptiTune"
              content="I worked with 5 other students to create AptiTune, which is an interactive learning platform that teaches students and independent learners the foundations of
            musicianship in a fun and exciting way. It features different lessons types, such as pitch matching, listening, sight reading, and rhythm activities. Our platform
            employs gamefication, as our lessons have multiple levels, and users can collect various badges for completing lessons and reaching certain milestones. In addition to this
            functionality, we provide personalized feedback through statistics so users can view their progress. My favorite part of this project was working on the audio-to-sheet music
            feature, which takes user's audio of them singing a series of notes and displays those notes on the screen on a music staff. Overall, I enjoyed using a number of new apis
            and packages to make the app interactive and engaging!"
              tools="React.JS, Redux, Express.JS, Node.JS, MongoDB, Heroku"
            />
          </div>
          <div className="project-container">
            <div className="project-name">
              <a href="http://sathvi-cs52-sa8.surge.sh/">MusicDiscovery</a>
            </div>
            <div className="project-tagline">
              A music sharing and discovery platform
            </div>
            <div className="project-pic">
              <img alt="music" src={music} />
            </div>
            <Project
              title="Music Sharing & Discovery Blog"
              content="I created an application that allows users to share their favorite albums and discover others'
            favorite music! I was partially inspired by Spotify, which is an app I use every single day. Users can view what
            others have recommended on the main page, and can search the recommendations by artist, album title, and genre. However,
            to share new music or edit/delete your recommendations, you must sign in.
            Once a user signs up and signs in, they can add their favorite album. Each post has the album title, album art, artist, and
            description in which the user can share a bit about the album. Users can also tag their recommendations with any
            relevant tags, such as the album's genre(s) and year of release. I'm proud of this project because it was the first
            time I implemented authentication in an app!"
              tools="React.JS, Node.JS, MongoDB, Heroku, Surge"
            />
          </div>
          <div className="project-container">
            <div className="project-name">
              <a href="http://sathvi-cs52-notes.surge.sh/">Collaborative Post-It Notes</a>
            </div>
            <div className="project-tagline">
              Create and share fun post-it notes
            </div>
            <div className="project-pic">
              <img alt="notes" src={notes} />
            </div>
            <Project
              title="React Post-It Notes"
              content="I built a collaborative, real-time post-it notes application that allows multiple users in different windows
            to add notes to a noteboard. Users can edit the note's title and content, change the text color, and drag the note around
            the board in real-time. The notes support markdown text in the content, so you can insert gifs, images, and styled text!
            Users can also delete their notes if they choose to. The notes are stored in a Firebase database. I also implemented a sign-in feature using Firebase authentication, so
            users can sign into the app with their Gmail. If the user signs in, any notes they make will have their name at the bottom
            of the note. If the user chooses to not sign in, the notes will say that they were made by an anonymous creator. I styled the
            app to look like a corkboard, as I was inspired by the corkboard at my own desk!"
              tools="React.JS, Firebase, Surge"
            />
          </div>
          {/* <div className="project-container">
            <div className="project-name">
              HealthQdb
            </div>
            <div className="project-pic">
              IMAGE TO COME SOON
            </div>
            <Project
              title="HealthQdb"
              content="I collaborated with 3 peers to build a management application allowing hospital administrators to assign daily
              tasks to healthcare workers, and enable workers to manage personal task lists. This was my first 'full-stack' project,
              and I worked on this before I learned how to create front-end interfaces using Javascript libraries. We used a SQL database that we
              connected to and made CRUD calls to using Node.JS, and created a command-line interface using Python."
              tools="SQL, Node.JS, Python"
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Projects;

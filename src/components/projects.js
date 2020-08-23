/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Project from './project';
import notes from '../img/notes.jpg';
import music from '../img/music.jpg';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Check out some of my projects!</h2>
        <div className="projects-area">

          <div className="project-container">
            <div className="project-name">
              Collaborative Post-It Notes
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
          <div className="project-container">
            <div className="project-name">
              Music Sharing + Discovery Blog
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
          </div>
        </div>
      </div>
    );
  }
}
/* return (
      <div className="projects-area">

        <div className="project-container">
          <div className="project-name">
            REACT POST IT NOTES
          </div>
          <div className="project-pic">
            IMAGE
          </div>
        </div>
        <div className="project-container">
          <div className="project-name">
            REACT POST IT NOTES
          </div>
          <div className="project-pic">
            IMAGE
          </div>
        </div>
        <div className="project-container">
          <div className="project-name">
            REACT POST IT NOTES
          </div>
          <div className="project-pic">
            IMAGE
          </div>
        </div>
        <div className="project-container">
          <div className="project-name">
            REACT POST IT NOTES
          </div>
          <div className="project-pic">
            IMAGE
          </div>
        </div>
      </div>

    ); */

/* <div className="projects">
    <Project title="i am a project" description="DESC RIPadsf adf akfjdf adsf ksdahfjsf asdsfhds" />
    <Project title="another project" description="DESCR IPakf jk sdah fjs f ds fhds" />
    <Project title="third project" description="DES CRI Pakf jksd ah fjsf ds fhds" />
  </div>; */

export default Projects;

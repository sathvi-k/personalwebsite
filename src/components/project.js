/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Modal from 'react-modal';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const styles = {
      overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'fixed',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
      },
      content: {
        // background: 'blue',
        // height: '400px',
        // width: '400px',
        top: 'none',
        bottom: 'none',
        left: 'none',
        right: 'none',
        height: 'auto',
        width: '60vw',
        border: '2px solid rgb(150, 150, 150)',
        background: 'rgb(255, 255, 255)',

      },
    };
    return (
      <div>
        <button className="button" type="button" onClick={this.handleOpenModal}>Learn More</button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={styles}
        >
          <div className="exitposition"><button className="modalclose" type="button" onClick={this.handleCloseModal}><i className="fas fa-times" /></button></div>
          <div className="project-title">{this.props.title}</div>
          <div className="project-desc">{this.props.content}</div>
          <div className="project-tools"><b>TOOLS + TECH:</b> {this.props.tools}</div>
        </Modal>
      </div>
    );
  }
}

export default Project;

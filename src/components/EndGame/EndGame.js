import React from 'react';
import Modal from 'React-modal';
import EndGameStyle from './EndGame.css';

export default (props) => (
  <div>
    <Modal
      isOpen={props.showModal}
      contentLabel="End Game"
      style={{
        overlay: {
          backgroundColor: 'papayawhip',
        },
        content: {
          position: 'absolute',
          color: 'lightsteelblue',
        },
      }}
    >
      <h1>END GAME</h1>
      <button onClick={() => props.restart()}>Restart</button>
    </Modal>
  </div>
);

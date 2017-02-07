import React from 'react';
import Modal from 'React-modal';

export default (props) => (
  <div>
    <Modal
      isOpen={props.showModal}
      contentLabel="End Game"
      style={{
        overlay: {

        },
        content: {
          position: 'absolute',
          color: 'lightsteelblue',
          background: 'rgba(255, 255, 255, 0.5)',
        },
      }}
    >
      <h1>GAME OVER</h1>
      <p>{props.message}</p>
      <button onClick={() => props.restart()}>Restart</button>
    </Modal>
  </div>
);

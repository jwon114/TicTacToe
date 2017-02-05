import React from 'react';
import Modal from 'React-modal';
import EndGameStyle from './EndGame.css';

export default (props) => (
  <div>
    <Modal
      isOpen={true}
      style={EndGameStyle}
    />
  </div>
);

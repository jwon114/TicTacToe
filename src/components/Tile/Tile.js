import React from 'react';
import Style from './Tile.css';

export default (props) => (
  <div>
    <button onClick={() => props.click()} className={Style.tile}>{props.value}</button>
  </div>
);

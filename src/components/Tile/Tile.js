import React from 'react';
import Style from './Tile.css';

export default (props) => (
  <div>
    <button className={Style.tile}>{props.value}</button>
  </div>
);

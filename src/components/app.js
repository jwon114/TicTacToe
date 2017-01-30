import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buttonPress } from '../actions/index';
import Tile from './Tile/Tile';
import Style from '../../style/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      inputValue: '',
    };
  }

  render() {
    const { reduxState, dispatch } = this.props;
    return (
      <div className={Style.container}>
        <Tile value={1} />
        <Tile value={2} />
        <Tile value={3} />
        <Tile value={4} />
        <Tile value={5} />
        <Tile value={6} />
        <Tile value={7} />
        <Tile value={8} />
        <Tile value={9} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxState: state.messageReducer,
  };
}

export default connect(mapStateToProps)(App);

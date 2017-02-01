import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buttonPress } from '../actions/index';
import Tile from './Tile/Tile';
import Style from '../../style/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      player: 'X',
    };
  }

  changeTurn() {
    const { player } = this.state;
    player === 'X' ? this.setState({ player: 'Y' }) : this.setState({ player: 'X' });
    console.log(player)
  }

  handleClick(val) {
    const { grid, player } = this.state;
    if (grid[val] !== player) {
      grid[val] = player;
      this.changeTurn();
      console.log(grid)
    }
  }

  render() {
    const { reduxState, dispatch } = this.props;
    return (
      <div className={Style.container}>
        <Tile click={() => this.handleClick(1)} value={1} />
        <Tile click={() => this.handleClick(2)} value={2} />
        <Tile click={() => this.handleClick(3)} value={3} />
        <Tile click={() => this.handleClick(4)} value={4} />
        <Tile click={() => this.handleClick(5)} value={5} />
        <Tile click={() => this.handleClick(6)} value={6} />
        <Tile click={() => this.handleClick(7)} value={7} />
        <Tile click={() => this.handleClick(8)} value={8} />
        <Tile click={() => this.handleClick(9)} value={9} />
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

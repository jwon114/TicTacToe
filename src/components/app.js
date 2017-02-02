import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buttonPress } from '../actions/index';
import Tile from './Tile/Tile';
import Style from '../../style/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
    };
  }

  changeTurn() {
    const { player } = this.state;
    player === 'X' ? this.setState({ player: 'O' }) : this.setState({ player: 'X' });
    console.log(player)
  }

  handleClick(val) {
    const { grid, player } = this.state;
    if (grid[val] === '') {
      grid[val] = player;
      this.changeTurn();
      console.log(grid)
    }
  }

  render() {
    const { reduxState, dispatch } = this.props;
    const { grid } = this.state;
    return (
      <div className={Style.container}>
        <Tile click={() => this.handleClick(0)} value={grid[0]} />
        <Tile click={() => this.handleClick(1)} value={grid[1]} />
        <Tile click={() => this.handleClick(2)} value={grid[2]} />
        <Tile click={() => this.handleClick(3)} value={grid[3]} />
        <Tile click={() => this.handleClick(4)} value={grid[4]} />
        <Tile click={() => this.handleClick(5)} value={grid[5]} />
        <Tile click={() => this.handleClick(6)} value={grid[6]} />
        <Tile click={() => this.handleClick(7)} value={grid[7]} />
        <Tile click={() => this.handleClick(8)} value={grid[8]} />
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

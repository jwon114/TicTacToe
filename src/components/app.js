import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buttonPress } from '../actions/index';
import Tile from './Tile/Tile';
import EndGame from './EndGame/EndGame';
import Style from '../../style/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      result: '',
      //draw: false,
      //win: false,
      message: '',
      showModal: false,
    };
  }

  changeTurn() {
    const { player } = this.state;
    player === 'X' ? this.setState({ player: 'O' }) : this.setState({ player: 'X' });
  }

  handleClick(val) {
    const { grid, player, draw, win, result } = this.state;
    if (grid[val] === '') {
      const newGrid = grid;
      newGrid[val] = player;
      this.setState({ grid: newGrid });

      // check draw condition
      this.isDraw();

      if (!result) {
        this.checkEndGame();
        this.changeTurn();
      }
    }
  }

  checkEndGame() {
    const { grid, player } = this.state;

    // win logic
    if ((grid[0] === grid[1] && grid[0] === grid[2] && grid[0] !== '') ||
    (grid[0] === grid[3] && grid[0] === grid[6] && grid[0] !== '') ||
    (grid[0] === grid[4] && grid[0] === grid[8] && grid[0] !== '') ||
    (grid[2] === grid[4] && grid[2] === grid[6] && grid[2] !== '') ||
    (grid[2] === grid[5] && grid[2] === grid[8] && grid[2] !== '') ||
    (grid[1] === grid[4] && grid[1] === grid[7] && grid[1] !== '') ||
    (grid[3] === grid[4] && grid[3] === grid[5] && grid[3] !== '') ||
    (grid[6] === grid[7] && grid[6] === grid[8] && grid[6] !== '')) {
      this.setState({ result: 'win', message: 'Player ' + player + ' Wins', showModal: true });
    }
  }

  isDraw() {
    const { grid, win } = this.state;
    const result = grid.every((element) => (element !== ''));
    if (result && !win) { this.setState({ result: 'draw', message: 'Draw Game', showModal: true }); }
  }

  restart() {
    this.setState({
      grid: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      result: '',
      //draw: false,
      //win: false,
      message: '',
      showModal: false });
  }

  render() {
    const { reduxState, dispatch } = this.props;
    const { grid, message, win, draw, showModal, result } = this.state;
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
        {console.log(this.state)}
        {result !== '' ? <EndGame message={message} showModal={showModal} restart={() => this.restart()} message={message} /> : null}
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

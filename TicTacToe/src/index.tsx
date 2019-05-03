import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { observer } from "mobx-react";
import { gameStore, ISquareProps } from "./gameStore";

function Square(props: ISquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

@observer
class Board extends React.Component<any, any> {
  handleClick(i: number): void {
    const squares = this.props.store.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.store.xIsNext ? "X" : "O";
    this.props.store.updateBoard(squares, !this.props.store.xIsNext);
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.props.store.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.props.store.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Player Move: " + (this.props.store.xIsNext ? "X" : "O");
    }

    return (
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component<{}, {}> {
  render() {
    return <Board store={gameStore} />;
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

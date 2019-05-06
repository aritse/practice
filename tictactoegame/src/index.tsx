import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import Store, { GameStore } from "./Store";
import "./index.css";

interface ITileProps {
  value: string;
  onClick: () => void;
}

interface IBoardProps {
  store: GameStore;
}

class Tile extends React.Component<ITileProps> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

@observer
class Board extends React.Component<IBoardProps> {
  renderTile(i: number) {
    return (
      <Tile
        value={this.props.store.tiles[i]}
        onClick={() => this.props.store.updateBoard(i)}
      />
    );
  }

  render() {
    let message;
    const winner = this.props.store.gameOver;

    if (winner) {
      message = "Winner: " + winner;
    } else {
      message = "Next player: " + (this.props.store.x ? "X" : "O");
    }
    return (
      <div className="board">
        <div className="status">{message}</div>
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
        <div className="board-row">
          {this.renderTile(3)}
          {this.renderTile(4)}
          {this.renderTile(5)}
        </div>
        <div className="board-row">
          {this.renderTile(6)}
          {this.renderTile(7)}
          {this.renderTile(8)}
        </div>
      </div>
    );
  }
}

const Game = <Board store={Store} />;
ReactDOM.render(Game, document.getElementById("root"));

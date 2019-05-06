import { observable, action, computed } from "mobx";

export class GameStore {
  @observable tiles = Array(9).fill(null);
  x = true;

  @computed get gameOver() {
    const L = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < L.length; i++) {
      const [a, b, c] = L[i];
      if (
        this.tiles[a] &&
        this.tiles[a] === this.tiles[b] &&
        this.tiles[a] === this.tiles[c]
      )
        return this.tiles[a];
    }
    return null;
  }

  @action updateBoard = (i: number) => {
    if (this.gameOver || this.tiles[i]) {
      return;
    }
    this.tiles[i] = this.x ? "X" : "O";
    this.x = !this.x;
  };
}

const store = new GameStore();
export default store;

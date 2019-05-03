import { observable } from "mobx";

export interface ISquareProps {
  value: string;
  onClick: () => void;
}

interface IBoardProps {
  squares: Array<string>;
  xIsNext: boolean;
}

export class GameStore {
  @observable squares: ISquareProps[];
  @observable xIsNext: boolean;

  constructor() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
  }

  public updateBoard(squares: ISquareProps[], turn: boolean) {
    this.squares = squares;
    this.xIsNext = turn;
  }
}

export const gameStore = new GameStore();

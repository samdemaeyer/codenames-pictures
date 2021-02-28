import { CardColor, TeamColor } from './Game'

export interface ISpyCard {
  id: string;
  startingColor?: TeamColor;
  cells: Array<ISpyCardCell>;
}

export interface ISpyCardCell {
  color: CardColor
}

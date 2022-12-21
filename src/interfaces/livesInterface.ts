export interface IILivesContext {
  lives: number[];
  setLives: React.Dispatch<React.SetStateAction<number[]>>;
  brokenLives: number[];
  setBrokenLives: React.Dispatch<React.SetStateAction<number[]>>;
}

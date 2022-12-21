import React from 'react';
import {IILivesContext} from '../../interfaces/livesInterface';

const initialState = {
  lives: [],
  setLives: () => {},
  brokenLives: [],
  setBrokenLives: () => {},
};
export const LivesContext = React.createContext<IILivesContext>(initialState);

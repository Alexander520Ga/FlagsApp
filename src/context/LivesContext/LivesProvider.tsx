import React from 'react';
import {DEFAULT_BROKEN_LIVES, DEFAULT_LIVES} from '../../constants';
import {IILivesContext} from '../../interfaces/livesInterface';
import {LivesContext} from './LivesContext';

interface IIProps {
  children: JSX.Element | JSX.Element[];
}

const LivesProvider: React.FC<IIProps> = ({children}) => {
  const [lives, setLives] = React.useState<number[]>([...DEFAULT_LIVES]);
  const [brokenLives, setBrokenLives] = React.useState<number[]>([
    ...DEFAULT_BROKEN_LIVES,
  ]);
  const livesInfo: IILivesContext = {
    lives,
    setLives,
    brokenLives,
    setBrokenLives,
  };
  return (
    <LivesContext.Provider value={livesInfo}>{children}</LivesContext.Provider>
  );
};

export default LivesProvider;

import React, {ReactNode} from 'react';
import {IBody} from '../components/templates/Main/Body';
import {IFooter} from '../components/templates/Main/Footer';
import {IHeader} from '../components/templates/Main/Header';
import {IIData} from './dataInterface';

export interface IIMainProps {
  numLives: number[];
  numberCountry: number;
  country: IIData | undefined;
  isCorrect: boolean | null;
  getResult: (text: string) => void;
  isActivedResult: boolean;
  next: () => void;
}

export interface IIRef {
  setOnChangeText(text: string): () => void;
}

export interface IChildren {
  children?: ReactNode | ReactNode[];
}

export interface IMainTemplate {
  Header: React.FC<IHeader>;
  Body: React.FC<IBody>;
  Footer: React.FC<IFooter>;
}

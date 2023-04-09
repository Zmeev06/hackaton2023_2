import {Difficult, Operations} from '../Types';

export interface MainScreenProps {}

export interface miniContainerProps {
  children: JSX.Element;
  width?: number | string;
  height?: number | string;
}

export interface SubjectHorizontalProps {
  img: any;
  title: string;
  onPress?: () => void;
  colorGradient: [string, string];
  reverse?: boolean;
  imgStyle?: {
    [key: string]: string | number;
  };
}

export interface StartGameProps {
  img: any;
  color: string;
  title: string;
  text: string;
  sound: any;
}

export type RootStackParamList = {
  MusicScreen: undefined;
  Home: undefined;
  HoneyGame: undefined;
  Puzzle: {image: string};
  PuzzlesScreen: undefined;
  AlphabetMain: undefined;
  MathGame: undefined;
  AlphabetGame: undefined;
  WhatIsNumber: undefined;
  Difficult: {type: string} | undefined;
  CalcScreen: {type: Operations; diff: Difficult};
};

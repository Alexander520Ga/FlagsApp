export interface IIStartingProps {
  setContinent: React.Dispatch<React.SetStateAction<string>>;
  setNumberFlags: React.Dispatch<React.SetStateAction<number>>;
  navigateToNextScreen: () => void;
}

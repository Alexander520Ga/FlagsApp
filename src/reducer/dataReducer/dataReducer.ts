import {IIData} from '../../interfaces/dataInterface';

export enum ActionsTypes {
  resetData = '[DATA] reset Data',
  delete = '[DATA] delete Data',
  ByRegion = '[DATA] Filter Countries by Region',
}

type ResetDataActionType = {
  type: ActionsTypes.resetData;
  payload: IIData[] | [];
};

type DeleteCountryActionType = {
  type: ActionsTypes.delete;
  payload: string | undefined;
};

type FilterCountryActionType = {
  type: ActionsTypes.ByRegion;
  payload: string;
};

type DataAction =
  | ResetDataActionType
  | DeleteCountryActionType
  | FilterCountryActionType;

export const dataReducer = (
  state: IIData[] | [],
  action: DataAction,
): IIData[] | [] => {
  switch (action.type) {
    case ActionsTypes.resetData:
      return [...action.payload];

    case ActionsTypes.ByRegion:
      const paises = state.filter(
        (country: IIData) => country.region === action.payload,
      );
      return paises;

    case ActionsTypes.delete:
      return state.filter(
        (country: IIData) => country.translations.spa.common !== action.payload,
      );

    default:
      return state;
  }
};

import { createContext, useContext, useReducer } from "react";
import {
  CREATE_DESCRIPTION,
  CREATE_NAME,
  SELECT_AMENITIES,
  SELECT_BED,
  SELECT_GUEST,
  SELECT_LOCATION,
  SELECT_PICTURES,
  SELECT_PRICE,
  SELECT_STARS,
  SELECT_TYPE,
} from "./constant";
import { LatLngLiteral } from "leaflet";

interface ILocation {
  latlng: LatLngLiteral | null;
  province: string | null;
  countryCode: string | null;
  locationStr: string | null;
}
interface IState {
  propertyType: string | null;
  location: ILocation;
  propertyStars: number | null;
  propertyName: string | null;
  propertyDescription: string | null;
  amenities: string[] | null;
  pictures: File[] | null;
  prices: number;
  details: {
    guests: number;
    beds: number;
  };
}
export interface IAction {
  type: string;
  payload: string | string[] | ILocation | number | File[];
}
const initialState = {
  propertyType: null,
  location: {
    latlng: null,
    province: null,
    countryCode: null,
    locationStr: null,
  },
  propertyStars: null,
  propertyName: null,
  propertyDescription: null,
  amenities: [],
  pictures: null,
  prices: 75,
  details: {
    guests: 1,
    beds: 1,
  },
};
export interface IBecomeHostContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
export const BecomeHostContext = createContext<IBecomeHostContext | null>(null);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case SELECT_TYPE:
      return { ...state, propertyType: action.payload as string };
    case SELECT_LOCATION:
      return { ...state, location: action.payload as ILocation };
    case SELECT_STARS:
      return { ...state, propertyStars: action.payload as number };
    case CREATE_NAME:
      return { ...state, propertyName: action.payload as string };
    case CREATE_DESCRIPTION:
      return { ...state, propertyDescription: action.payload as string };
    case SELECT_AMENITIES:
      return { ...state, amenities: action.payload as string[] };
    case SELECT_PICTURES:
      if (!state.pictures) {
        return { ...state, pictures: action.payload as File[] };
      } else {
        return {
          ...state,
          pictures: [...state.pictures, ...(action.payload as File[])],
        };
      }
    case SELECT_PRICE:
      return { ...state, prices: action.payload as number };
    case SELECT_GUEST:
      return {
        ...state,
        details: { ...state.details, guests: action.payload as number },
      };
    case SELECT_BED:
      return {
        ...state,
        details: { ...state.details, beds: action.payload as number },
      };

    default:
      return state;
  }
}

function BecomeHostProvider({ children }: { children: React.ReactNode }) {
  const { Provider } = BecomeHostContext;
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

function useBecomeHost() {
  const context = useContext(BecomeHostContext);
  if (context === undefined)
    throw new Error("BecomeHostContext was used outside of BecomeHostProvider");
  return context;
}

export { BecomeHostProvider, useBecomeHost };

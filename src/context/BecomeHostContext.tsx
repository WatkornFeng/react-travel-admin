import { LatLngLiteral } from "leaflet";
import { createContext, useContext, useReducer } from "react";
import {
  CREATE_DESCRIPTION,
  CREATE_NAME,
  DELETE_PICTURE,
  RESET_DEFAULT,
  SELECT_AMENITIES,
  SELECT_BED,
  SELECT_GUEST,
  SELECT_LOCATION,
  SELECT_PICTURES,
  SELECT_PRICE,
  SELECT_STARS,
  SELECT_TYPE,
} from "./constant";

interface ILocation {
  latlng: LatLngLiteral | null;
  province: string | null;
  countryCode: string | null;
  locationStr: string | null;
}
interface IAmenities {
  value: string;
  base64Url: string;
}
export interface IBecomeHostState {
  propertyType: string | null;
  propertyLocation: ILocation;
  propertyStars: number | null;
  propertyName: string | null;
  propertyDescription: string | null;
  propertyAmenities: string[] | null;
  propertyPictures: File[] | null;
  propertyPrices: number;
  propertyDetails: {
    guests: number;
    beds: number;
  };
}
export interface IAction {
  type: string;
  payload?: string | string[] | ILocation | number | File[] | IAmenities[];
}
const initialState = {
  propertyType: null,
  propertyLocation: {
    latlng: null,
    province: null,
    countryCode: null,
    locationStr: null,
  },
  propertyStars: null,
  propertyName: null,
  propertyDescription: null,
  propertyAmenities: null,
  propertyPictures: null,
  propertyPrices: 75,
  propertyDetails: {
    guests: 1,
    beds: 1,
  },
};
export interface IBecomeHostContext {
  state: IBecomeHostState;
  dispatch: React.Dispatch<IAction>;
}
export const BecomeHostContext = createContext<IBecomeHostContext | null>(null);

function reducer(state: IBecomeHostState, action: IAction): IBecomeHostState {
  switch (action.type) {
    case RESET_DEFAULT:
      return {
        ...state,
        propertyType: null,
        propertyLocation: {
          latlng: null,
          province: null,
          countryCode: null,
          locationStr: null,
        },
        propertyStars: null,
        propertyName: null,
        propertyDescription: null,
        propertyAmenities: null,
        propertyPictures: null,
        propertyPrices: 75,
        propertyDetails: {
          guests: 1,
          beds: 1,
        },
      };
    case SELECT_TYPE:
      return { ...state, propertyType: action.payload as string };
    case SELECT_LOCATION:
      return { ...state, propertyLocation: action.payload as ILocation };
    case SELECT_STARS:
      return { ...state, propertyStars: action.payload as number };
    case CREATE_NAME:
      return { ...state, propertyName: action.payload as string };
    case CREATE_DESCRIPTION:
      return { ...state, propertyDescription: action.payload as string };
    case SELECT_AMENITIES:
      return { ...state, propertyAmenities: action.payload as string[] };
    case SELECT_PICTURES:
      if (!state.propertyPictures) {
        return { ...state, propertyPictures: action.payload as File[] };
      } else {
        return {
          ...state,
          propertyPictures: [
            ...state.propertyPictures,
            ...(action.payload as File[]),
          ],
        };
      }
    case DELETE_PICTURE:
      return { ...state, propertyPictures: action.payload as File[] };
    case SELECT_PRICE:
      return { ...state, propertyPrices: action.payload as number };
    case SELECT_GUEST:
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          guests: action.payload as number,
        },
      };
    case SELECT_BED:
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          beds: action.payload as number,
        },
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

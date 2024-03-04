import { createContext, useContext, useReducer } from "react";
import { SELECT_LOCATION, SELECT_TYPE } from "./constant";
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
}
interface IAction {
  type: string;
  payload: string | ILocation;
}
const initialState = {
  propertyType: null,
  location: {
    latlng: null,
    province: null,
    countryCode: null,
    locationStr: null,
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

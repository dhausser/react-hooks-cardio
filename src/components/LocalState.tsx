import React, { useReducer, useContext, FunctionComponent } from "react";
import { ValueType } from "react-select";
import { AppState, FilterContext, OptionType, Action } from './LocalStateTypes';

const initialState: AppState = {
  project: null,
  version: null,
  team: null
};

const defaultValues: FilterContext = {
  state: initialState,
  setProject: (value: ValueType<OptionType>) => { console.log(value) },
  setVersion: (value: ValueType<OptionType>) => { console.log(value) },
  setTeam: (value: ValueType<OptionType>) => { console.log(value) },
}

const LocalStateContext = React.createContext(defaultValues);
const LocalStateProvider = LocalStateContext.Provider;

function reducer(state: AppState, action: Action): AppState {
  if (!action.payload) {
    return initialState;
  }

  switch (action.type) {
    case "SET_PROJECT":
      return { ...initialState, project: action.payload };
    case "SET_VERSION":
      return { ...state, version: action.payload };
    case "SET_TEAM":
      return { ...state, team: action.payload };
    default:
      return state;
    // case "RESET":
    //   return initialState;
    // default:
    //   throw new Error();
  }
}

const FilterStateProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setProject(value: ValueType<OptionType>) {
    dispatch({ type: "SET_PROJECT", payload: value });
  }

  function setVersion(value: ValueType<OptionType>) {
    dispatch({ type: "SET_VERSION", payload: value });
  }

  function setTeam(value: ValueType<OptionType>) {
    dispatch({ type: "SET_TEAM", payload: value });
  }

  return (
    <LocalStateProvider value={{ state, setProject, setVersion, setTeam }}>
      {children}
    </LocalStateProvider>
  );
}

function useFilter() {
  return useContext(LocalStateContext);
}

export { FilterStateProvider, LocalStateContext, useFilter };

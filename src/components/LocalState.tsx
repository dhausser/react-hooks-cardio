import React, { useReducer, useContext } from "react";
import { ValueType, ActionMeta } from "react-select";

interface OptionType {
  value: string
  label: string
}

interface FilterState {
  project: OptionType | null
  version: OptionType | null
  team: OptionType | null
}

interface Action {
  type: string
  option: ValueType<{ value: string; label: string }>
}

interface Props {
  children: React.ReactNode
}

interface FilterContext {
  state: FilterState
  setProject: (value: ValueType<OptionType>, action: ActionMeta) => void
  setVersion: (value: ValueType<OptionType>, action: ActionMeta) => void
  setTeam: (value: ValueType<OptionType>, action: ActionMeta) => void
}

const initialState = {
  project: null,
  version: null,
  team: null
};

const defaultValues: FilterContext = {
  state: initialState,
  setProject: (value: ValueType<OptionType>, action: ActionMeta) => { console.log(value) },
  setVersion: (value: ValueType<OptionType>, action: ActionMeta) => { console.log(value) },
  setTeam: (value: ValueType<OptionType>, action: ActionMeta) => { console.log(value) },
}

const LocalStateContext = React.createContext(defaultValues);
const LocalStateProvider = LocalStateContext.Provider;

function reducer(state: FilterState, action: Action) {
  if (!action.option) {
    return initialState;
  }

  // const { value, label } = action.option;
  const value = action.option;
  const label = action.option;

  switch (action.type) {
    case "project":
      return { ...initialState, project: { value, label } };
    case "version":
      return { ...state, version: { value, label } };
    case "team":
      return { ...state, team: { value, label } };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function FilterStateProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setProject(value: ValueType<OptionType>, action: ActionMeta) {
    dispatch({ type: "project", option: value });
  }

  function setVersion(value: ValueType<OptionType>, action: ActionMeta) {
    dispatch({ type: "version", option: value });
  }

  function setTeam(value: ValueType<OptionType>, action: ActionMeta) {
    dispatch({ type: "team", option: value });
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

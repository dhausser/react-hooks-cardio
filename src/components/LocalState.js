import React, { useReducer, useContext } from "react";

const LocalStateContext = React.createContext();
const LocalStateProvider = LocalStateContext.Provider;

const initialState = {
  project: { value: "", label: "" },
  version: { value: "", label: "" },
  team: { value: "", label: "" }
};

function reducer(state, action) {
  if (!action.option) {
    return initialState;
  }

  const { value, label } = action.option;

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

function FilterStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setProject(e) {
    dispatch({ type: "project", option: e });
  }

  function setVersion(e) {
    dispatch({ type: "version", option: e });
  }

  function setTeam(e) {
    dispatch({ type: "team", option: e });
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

import React, { useReducer, useEffect, useContext } from "react";
import ThemeContext from "./Context";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `You clicked ${state.count} times`;
  });

  return (
    <>
      Count: {state.count}
      <button
        style={{
          background: theme.background,
          color: theme.foreground,
          width: "40px"
        }}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        style={{
          background: theme.background,
          color: theme.foreground,
          width: "40px"
        }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
    </>
  );
}

export default Counter;

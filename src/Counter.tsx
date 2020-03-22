import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './Context';

function Counter() {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p>You clicked {count} times</p>
      <button
        style={{ background: theme.background, color: theme.foreground }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>

    </>
  );
}

export default Counter;

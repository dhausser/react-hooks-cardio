import React from 'react';
import ThemeContext, { themes } from './Context';
import Filters from './Filters';
import Counter from './Counter';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  padding: 20px;
`;

function App() {
  return (
    <Layout>
      <ThemeContext.Provider value={themes.dark}>
        <Filters />
        <Counter />
      </ThemeContext.Provider>
    </Layout>
  );
}

export default App;

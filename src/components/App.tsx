import React from 'react';
import ThemeContext, { themes } from './Context';
import { FilterStateProvider } from './LocalState';
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
        <FilterStateProvider>
          <Filters />
          <Counter />
        </FilterStateProvider>
      </ThemeContext.Provider>
    </Layout>
  );
}

export default App;

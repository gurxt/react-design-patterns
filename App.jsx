import React from 'react';
import SplitScreen from './components/SplitScreen';

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: 'crimson' }}>{title}</h2>;
};

const RightSideCompoennt = ({ title }) => {
  return <h2 style={{ backgroundColor: 'fuchsia' }}>{title}</h2>;
};

const App = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title={'Left'} />
      <RightSideCompoennt title={'Right'} />
    </SplitScreen>
  );
};

export default App;

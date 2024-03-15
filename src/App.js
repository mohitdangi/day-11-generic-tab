import React from 'react';
import Tab from './Tab'; 

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: <div>Content of Tab 1</div> },
    { title: 'Tab 2', content: <div>Content of Tab 2</div> },
    { title: 'Tab 3', content: <div>Content of Tab 3</div> },
  ];

  return (
    <div className="app">
      <h1>Tab Example</h1>
      <Tab tabs={tabs} />
    </div>
  );
};

export default App;

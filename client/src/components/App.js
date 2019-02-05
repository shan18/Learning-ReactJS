import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <h1>Page One</h1>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h1>Page Two</h1>
      <button>Click Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;

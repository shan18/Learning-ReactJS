import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <h1>Page One</h1>
      <Link to="/pagetwo">Navigate to page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h1>Page Two</h1>
      <button>Click Me!</button>
      <Link to="/">Navigate to page one</Link>
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

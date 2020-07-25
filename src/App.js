import React from 'react';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import About from './containers/about/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutContent from './components/about/AboutContent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home />
        <Route path="/about" component={AboutContent} />
      </div>
    </Router>
  );
}

export default App;

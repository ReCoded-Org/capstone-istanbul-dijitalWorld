import React from 'react';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import About from './containers/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <NavBar />
        {/* <Home /> */}
        <About />
      </div>
  );
}

export default App;

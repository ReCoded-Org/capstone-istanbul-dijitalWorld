import React from 'react';
import Home from './containers/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import InspirePage from './containers/inspirePage/InspirePage';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <InspirePage /> */}
      <Footer />
    </div>
  );
}

export default App;

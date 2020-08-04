import React from 'react';
// import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import About from './containers/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;

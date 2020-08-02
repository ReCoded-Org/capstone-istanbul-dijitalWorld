import React from 'react';
import Home from './containers/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import ContactUsPage from './containers/contactUs/ContactUsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <ContactUsPage />
      <Footer />
    </div>
  );
}

export default App;

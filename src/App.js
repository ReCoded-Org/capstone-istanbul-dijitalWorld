import React from 'react';
import Home from './containers/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import SignupPage from './containers/signupPage/SignupPage';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Home />
      <Footer /> */}
      <SignupPage />
    </div>
  );
}

export default App;

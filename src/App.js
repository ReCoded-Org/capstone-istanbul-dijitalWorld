import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import BlogCard from './components/blog-cards/BlogCard';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <BlogCard />
      <Footer />
    </Router>
  );
}

export default App;

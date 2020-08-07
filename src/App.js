import React from 'react';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import BlogCard from "./components/blog-cards/BlogCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BlogCard />
      <Footer />
    </div>
  );
}

export default App;

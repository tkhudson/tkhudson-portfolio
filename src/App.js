import React from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

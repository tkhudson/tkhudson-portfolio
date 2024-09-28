import React from 'react';
import Footer from './components/footer';
import Menu from './components/menu';
import styles from './styles/App.css';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <div className="App">
      <Menu className={styles.menu}/>
      <main>
      <AboutMe />
      <p>Welcome to DevByCloud!</p>
      </main>
      <Footer className="content"/>
    </div>
  );
}

export default App;
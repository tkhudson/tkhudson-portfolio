import React from 'react';
import Footer from './components/footer';
import Menu from './components/menu';
import styles from './styles/App.css';

function App() {
  return (
    <div>
      <Menu className={styles.menu}/>
      <p>Welcome to DevByCloud!</p>
      <Footer className="content"/>
    </div>
  );
}

export default App;
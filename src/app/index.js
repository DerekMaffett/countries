import React from 'react';
import styles from './styles.css';

class App extends React.Component {
  render() {
    console.log('tuff');
    return (
      <div style={{margin: '10px'}} className={styles.stuff}>
        stuf
      </div>
    );
  }
}

export default App;

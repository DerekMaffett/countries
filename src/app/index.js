import React from 'react';
import styles from './styles.css';
console.log(styles);

class App extends React.Component {
    render() {
        return (
            <div className={styles.stuff}>
                stuf
            </div>
        );
    }
}

export default App;

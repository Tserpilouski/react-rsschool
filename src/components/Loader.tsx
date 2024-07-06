import { Component } from 'react';
import styles from './loader.module.css';

class Loader extends Component {
  render() {
    return <div className={styles.loader}>Loading...</div>;
  }
}

export default Loader;

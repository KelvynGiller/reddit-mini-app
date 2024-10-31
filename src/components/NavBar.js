import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from '../style/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Reddit Client</Link>
      </div>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
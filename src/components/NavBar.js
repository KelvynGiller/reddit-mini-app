import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchTerm, setCategory } from '../slices/postsSlice';
import SearchBar from './SearchBar';
import styles from '../style/NavBar.module.css';
import logo from '../imgs/reddit-logo-1.png';

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(setSearchTerm(''));
    dispatch(setCategory(''));
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
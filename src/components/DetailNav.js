import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import styles from 'src/css/Navbar.module.css';

function DetailNav() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.icondiv}>
        <MdArrowBackIos className={styles.icon2} />
      </NavLink>
      <span className={styles.navspan}>CRYPTO SAGE</span>
    </header>
  );
}

export default DetailNav;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcSettings } from 'react-icons/fc';
import styles from 'src/css/Navbar.module.css';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.icondiv}>
        <img src={logo} alt="planet" className={styles.icon} />
      </NavLink>
      <span className={styles.navspan}>CRYPTO SAGE</span>
      <nav>
        <ul className={styles.navItems}>
          <NavLink>
            <FcSettings className={styles.settingicon} />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

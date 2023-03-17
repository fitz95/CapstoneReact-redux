import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcSettings } from 'react-icons/fc';
import styles from 'src/css/Navbar.module.css';
import logo from '../images/logo.png';
import Modal from './Modal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.icondiv}>
          <img src={logo} alt="planet" className={styles.icon} />
        </NavLink>
        <span className={styles.navspan}>CRYPTO SAGE</span>
        <nav>
          <ul className={styles.navItems}>
            <NavLink>
              <FcSettings
                className={styles.settingicon}
                onClick={() => setIsOpen(true)}
              />
            </NavLink>
          </ul>
        </nav>
      </header>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;

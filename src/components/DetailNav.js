import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FcSettings } from 'react-icons/fc';
import { MdArrowBackIos } from 'react-icons/md';
import styles from 'src/css/Navbar.module.css';

function DetailNav() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.icondiv}>
        <MdArrowBackIos className={styles.icon2} />
      </NavLink>
      <span className={styles.navspan}>CRYPTO SAGE</span>
      {/* <nav>
        <ul className={styles.navItems}>
          <NavLink>
            <FcSettings className={styles.settingicon} />
          </NavLink>
        </ul>
      </nav> */}
    </header>
  );
}

export default DetailNav;

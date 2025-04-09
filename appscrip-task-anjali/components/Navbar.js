import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FiSearch, FiHeart, FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className={styles.navbarWrapper}>
      <div className={styles.topBar}>
        <div className={styles.left}>
          <img src="/logo.jpeg" alt="Logo" className={styles.logoIcon} />
        </div>

        <div className={styles.center}>
          <div className={styles.logoText}>LOGO</div>
        </div>

        <div className={styles.right}>
          <div className={styles.desktopIcons}>
            <FiSearch className={styles.icon} />
            <FiHeart className={styles.icon} />
            <FiUser className={styles.icon} />
            <FiShoppingBag className={styles.icon} />
            <div className={styles.languageSelector}>
              ENG <span className={styles.caret}>▼</span>
            </div>
          </div>

          <div className={styles.mobileMenuIcon} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            {mobileNavOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      <nav className={`${styles.navLinks} ${mobileNavOpen ? styles.open : ''}`}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}

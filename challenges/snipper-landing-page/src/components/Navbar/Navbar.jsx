import { useState } from 'react';

import styles from '../Navbar/Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as HamburgerMenu } from '../../assets/hamburger-menu.svg';
import Button from '../Button';
import { Menu, MenuItem } from '../Menu';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="#">
          <Logo />
        </a>
      </div>
      <div className={styles.right}>
        <Button variant="link">
          <SearchIcon className={styles.searchIcon} />
        </Button>
        <Button variant="link">Sign in</Button>
        <Button>
          <b>Get started</b> <span>- it's free</span>
        </Button>
      </div>
      <div className={styles.mobileRight}>
      <Button variant="link">
          <SearchIcon className={styles.searchIcon} />
        </Button>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <HamburgerMenu />
        </button>
        <Menu open={isMenuOpen}>
          <MenuItem>
            <Button variant="link">Sign in</Button>
          </MenuItem>
          <MenuItem>
            <Button variant="link">Register</Button>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;

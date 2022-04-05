import { useState } from 'react';

import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { CgMenu } from 'react-icons/cg';
import Button from '../Button';
import { Menu, MenuItem } from '../Menu';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="./">
          <Logo className={styles.logo} />
        </a>
        <Button className={styles.hiringButton}>Hosterr is hiring!</Button>
      </div>
      <div className={styles.center}>
        <a href="#">Plans</a>
        <a href="#">Find Domain</a>
        <a href="#">Why Hosterr</a>
      </div>
      <div className={styles.right}>
        <Button variant="link">Sign in</Button>
        <Button>Join Waitlist</Button>
      </div>
      <div className={styles.menuContainer}>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <CgMenu size="30px" />
        </button>
        <Menu open={isMenuOpen}>
          <MenuItem>
            <a href="#">Plans</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Find Domain</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Why Hosterr</a>
          </MenuItem>
          <hr />
          <MenuItem>
            <a href="#">Sign in</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Join Waitlist</a>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;

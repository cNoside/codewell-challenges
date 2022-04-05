import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <nav>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    </div>
  )
}

export default Footer;

import styles from './Footer.module.scss';
import Help from '../Help';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
      <Help className={styles.help} />
    </footer>
  );
}

export default Footer;

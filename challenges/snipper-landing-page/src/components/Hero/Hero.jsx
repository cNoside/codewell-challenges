import styles from './Hero.module.scss';
import snipperImage from '../../assets/snipper-image.png';
import Button from '../Button';

function Hero() {
  return (
    <div className={styles.hero}>
      <header>
        <h1>Gorgeous Code Snippets</h1>
        <p>
          With Snipper, create fully customizable code snippets in a matter of
          seconds right from your browser
        </p>
        <Button className={styles.getStarted}>
          <b>Get Started</b> - it's free
        </Button>
        <p>No credit card required</p>
      </header>
      <img src={snipperImage} alt="Snipper in action" className={styles.snipperImage} />
    </div>
  );
}

export default Hero;

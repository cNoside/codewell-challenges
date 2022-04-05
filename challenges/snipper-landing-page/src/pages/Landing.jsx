import styles from './Landing.module.scss';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import customisableImg from '../assets/customisable-image.png';

function Landing() {
  return (
    <main className={styles.landing}>
      <Hero />
      <Section className={styles.section}>
        <div className={styles.left}>
          <h2>A fully customisable code snippet editor</h2>
          <p>
            Fully customize the color scheme of your code snippet, or use our
            own premade color schemes. Export your code snippets in JPG, PDF,
            PNG, or any of the other 10+ common extensions.
          </p>
          <Button className={styles.getStarted}>
            <b>Get started</b> <span>- it's free</span>
          </Button>
        </div>
        <div className={styles.right}>
          <img className={customisableImg} src={customisableImg} alt="Customisation UI" />
        </div>
      </Section>
    </main>
  );
}

export default Landing;

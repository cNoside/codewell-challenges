import styles from './Hero.module.scss';
import ModelIllustration from '../ModelIllustration';
import { ReactComponent as CheckIcon } from '../../assets/checkmark.svg';
import Button from '../Button';
import Input from '../Input';

function Hero() {
  return (
    <div className={styles.hero}>
      <section>
        <h1>
          Host your website in
          less than 5 minutes.
        </h1>
        <p>
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available
          online.
        </p>
        <form className={styles.waitlistInput}>
          <Input required type="email" placeholder="Enter e-mail address" />
          <Button type="submit">Join Waitlist</Button>
        </form>
        <br />
        <span className={styles.info}>
          <CheckIcon /> No spam, ever. Unsubscribe anytime.
        </span>
      </section>
      <ModelIllustration width="64px" className={styles.illustration} />
    </div>
  );
}

export default Hero;

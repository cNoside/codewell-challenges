import styles from './ModelIllustration.module.scss';
import heroImage from '../../assets/hero-image-model.png';
import { ReactComponent as BlueShape } from '../../assets/blue-shape.svg';
import { ReactComponent as PinkShape } from '../../assets/pink-shape.svg';
import { ReactComponent as PurpleShape } from '../../assets/purple-shape.svg';

function ModelIllustration({ className }) {
  return (
    <div className={`${styles.illustration} ${className}`}>
      <img src={heroImage} alt="a female model" />
      <PurpleShape />
      <PinkShape />
      <BlueShape />
    </div>
  );
}

export default ModelIllustration;

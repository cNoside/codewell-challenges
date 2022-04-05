import styles from './Help.module.scss';
import { ReactComponent as HelpAvatar } from '../../assets/help-avatar.svg';

function Help(props) {
  const { className } = props;

  return (
    <div className={`${styles.help} ${className}`}>
      <HelpAvatar />
      <p>
        Have any questions?
        <br />
        <b>Talk to a specialist</b>
      </p>
    </div>
  );
}

export default Help;

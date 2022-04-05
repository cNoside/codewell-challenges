import styles from './Button.module.scss';

function Button(props) {
  const {
    variant = 'solid',
    type = 'button',
    onClick,
    className,
    children
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

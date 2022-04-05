import styles from './Button.module.scss';

function Button(props) {
  const {
    type = 'button',
    variant = 'solid',
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

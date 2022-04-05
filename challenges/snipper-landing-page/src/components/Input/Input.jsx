import styles from './Input.module.scss';

function Input(props) {
  const {
    type = 'text',
    placeholder,
    onChange,
    value,
    className,
    required
  } = props;
  return (
    <input
      required={required}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className}`}
    />
  );
}

export default Input;

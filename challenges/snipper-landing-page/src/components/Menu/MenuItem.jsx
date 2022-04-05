import styles from './MenuItem.module.scss';

function MenuItem(props) {
  const { children } = props;
  return (
    <div className={styles.menuItem}>
      {children}
    </div>
  )
}

export default MenuItem
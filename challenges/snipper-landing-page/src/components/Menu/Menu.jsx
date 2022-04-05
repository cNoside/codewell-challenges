import styles from './Menu.module.scss';

function Menu(props) {
  const { children, open } = props;

  return (
    <div className={`${styles.menu} ${open ? 'open' : 'close'}`}>
      {children}
    </div>
  );
}

export default Menu;

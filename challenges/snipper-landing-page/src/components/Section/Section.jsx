import styles from './Section.module.scss';

function Section(props) {
  const { children, ...rest } = props

  return (
    <div {...rest}>{children}</div>
  );
}

export default Section;

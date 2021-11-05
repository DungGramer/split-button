import styles from './SplitButton.module';
import PropTypes from 'prop-types';
import useKeyHandle from '~/hooks/useKeyHandle';

const SplitButton = ({ children, title, dir }) => {
  /*   const handle = useKeyHandle('Escape', () => {
    console.log(`📕 jhgjhg - 7:SplitButton.jsx \n`);
  });
  handle(); */

  return (
    <div className={styles['split-button']} dir={dir}>
      <button>{title}</button>
      <span className={styles['popup-button']} tabIndex="-1">
        <i className="far fa-chevron-down fa-fw" />
        <ul className={styles.popup}>{children}</ul>
      </span>
    </div>
  );
};

SplitButton.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  dir: PropTypes.string,
};

export default SplitButton;

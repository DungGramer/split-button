import { useState } from 'react';
import styles from './SplitButton.module';

const SplitButton = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles['split-button']}>
      <button>View cart</button>
      <span
        className={styles['popup-button']}
        aria-expanded={expanded}
        tabIndex="-1"
      >
        <i className="far fa-chevron-down fa-fw" />
        <ul className={styles.popup}>
          <li>
            <button>
              <i className="far fa-shopping-cart"></i>
              Checkout
            </button>
          </li>
          <li>
            <button>
              <i class="far fa-sack-dollar"></i>Quick pay
            </button>
          </li>
          <li>
            <button>
              <i class="fal fa-save"></i>Save for later
            </button>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default SplitButton;

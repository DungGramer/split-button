import { useCallback, useState } from 'react';
import logo from '/public/assets/images/logo.svg';
import styles from './Home.module';
import SplitButton from '@components/split-button/SplitButton';

function Home() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 500);
  }, []);

  return (
    <div className={styles.App}>
      <SplitButton />
    </div>
  );
}

export default Home;

import styles from './Home.module';
import SplitButton from '@components/split-button/SplitButton';

function Home() {
  const changeDir = () => {
    const dir = document.body.dir || 'ltr';
    document.body.dir = dir === 'rtl' ? 'ltr' : 'rtl';
  };
  return (
    <div className={styles.App}>
      <button className={styles.dir} onClick={changeDir}>
        Change dir
      </button>
      <SplitButton title="View cart">
        <li>
          <button>
            <i className="far fa-shopping-cart" />
            Checkout
          </button>
        </li>
        <li>
          <button>
            <i className="far fa-sack-dollar" />
            Quick pay
          </button>
        </li>
        <li>
          <button>
            <i className="fal fa-save" />
            Save for later
          </button>
        </li>
      </SplitButton>

      <SplitButton title="かごの中身を見る" dir="rtl">
        <li>
          <button>
            <i className="far fa-shopping-cart" />
            かごの中身を見る
          </button>
        </li>
        <li>
          <button>
            <i className="far fa-sack-dollar" />
            クイックペイ
          </button>
        </li>
        <li>
          <button>
            <i className="fal fa-save" />
            後で見るように保存
          </button>
        </li>
      </SplitButton>
    </div>
  );
}

export default Home;

import { useState } from 'react';
import styles from './counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.clickeable} ml-16 mt-12 mb-12`}>
        <button onClick={decrement}>-</button>
      </div>
      <div className={styles.count}>{count}</div>
      <div className={`${styles.clickeable} mr-16 mt-12 mb-12`}>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
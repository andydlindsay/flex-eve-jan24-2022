// let count = 0;
import {useState} from 'react';

const Counter = () => {
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    // count += 1;
    // setCount(count + 1); // 1
    // setCount(count + 1);
    // setCount(count + 1);

    setCount(prev => prev + 1); // 1
    setCount(prev => prev + 1); // 2
    setCount(prev => prev + 1); // 3
    // console.log(count);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={clickHandler}>Increment!</button>
    </div>
  );
};

export default Counter;

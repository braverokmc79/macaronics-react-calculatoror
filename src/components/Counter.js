import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store/counter";



const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show=useSelector(state=>state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //리덕스 툴킷은 자동으로 action 생성하고 리덕스 툴킷이 생성한 {type: SOME_UNIQUE_IDENTIFIER, payload:10}
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>리덕스 카운터</h1>
      {console.log("show :",show)}

      {show && <div className={classes.value}>{counter.counter} </div> }
      <div>
        <button onClick={incrementHandler}>증가</button>
        <button onClick={increaseHandler}>5씩 증가</button>
        <button onClick={decrementHandler}>감소</button>
      </div>
      <button onClick={toggleCounterHandler}>카운터 전환</button>
    </main>
  );
};

export default Counter;

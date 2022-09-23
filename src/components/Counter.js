import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/Slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addAmount = Number(incrementAmount) || 0;

  return (
    <section>
      <p className="counter">{count}</p>
      <div className="action">
        <button
          className="button"
          onClick={() => dispatch(actions.increment())}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => dispatch(actions.decrement())}
        >
          -
        </button>
        <button className="button" onClick={() => dispatch(actions.reset())}>
          Reset
        </button>

        <input
          className="add"
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className="button"
          onClick={() => dispatch(actions.inceaseByAmount(addAmount))}
        >
          Increase
        </button>
      </div>
    </section>
  );
};

export default Counter;

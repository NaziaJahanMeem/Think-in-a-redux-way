import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import { ddecrement, dincrement } from "../redux/dynamicCounter/actions";

function VariableCounter({ count, increment, decrement }) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold" id="counter">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            id="increment"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            id="decrement"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? () => dispatch(dincrement(5))
      : () => dispatch(increment()),
    decrement: ownProps.dynamic
      ? () => dispatch(ddecrement(2))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);

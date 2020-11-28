import { WATCH, FORK, STAR, ADD_DATA } from "./actionconstants";
import data from "./../data";

const INIT_STATE = {
  watch: 100,
  star: 120,
  fork: 180,
  data: data,
};

const CounterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case WATCH: {
      return {
        ...state,
        watch: state.watch + 1,
      };
    }
    case FORK: {
      return {
        ...state,
        fork: state.fork + 1,
      };
    }
    case STAR: {
      return {
        ...state,
        star: state.star + 1,
      };
    }
    case ADD_DATA: {
      return {
        ...state,
        data: [...state.data, ...data],
      };
    }
    default:
      return state;
  }
};

export default CounterReducer;

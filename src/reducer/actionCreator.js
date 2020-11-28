import { WATCH, FORK, STAR, ADD_DATA } from "./actionconstants";

export const watchActionCreator = () => {
  return {
    type: WATCH,
  };
};

export const forkActionCreator = () => {
  return {
    type: FORK,
  };
};

export const starActionCreator = () => {
  return {
    type: STAR,
  };
};

export const addDataActionCreator = () => {
  return {
    type: ADD_DATA,
  };
};

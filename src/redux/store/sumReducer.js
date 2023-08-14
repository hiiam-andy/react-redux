const defaultState = {
  sum: 0,
};

export const sumReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_SUM":
      return { ...state, sum: state.sum + action.payload };
    case "GET_SUM":
      return { ...state, sum: state.sum - action.payload };
    default:
      return state;
  }
};

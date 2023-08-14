const defaultState = {
  users: [{ name: "user1", id: 100 }],
};

const ADD_USER = "ADD_USER";
const ADD_MORE_USERS = "ADD_MORE_USERS";
const REMOVE_USER = "REMOVE_USER";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case ADD_MORE_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const addMoreUsersAction = (payload) => ({
  type: ADD_MORE_USERS,
  payload,
});
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload });

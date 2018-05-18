// Expenses Reducer

const signUpReducerDefaultState = {userName: 'asdfasf'};

export default (state = signUpReducerDefaultState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
    return {
      ...state,
      msg: action.payload
    }
    default:
      return state;
  }
};
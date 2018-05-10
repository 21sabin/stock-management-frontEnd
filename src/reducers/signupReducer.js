// Expenses Reducer

const signUpReducerDefaultState = {
    sucess:"",
    error:""
};

export default (state = signUpReducerDefaultState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
    console.log("signup reducer called")
      return [
        ...state
      ];
    default:
      return state;
  }
};
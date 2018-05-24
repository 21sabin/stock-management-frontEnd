// Expenses Reducer

const signUpReducerDefaultState = {sucess:'',message:'',user:''};

export default (state = signUpReducerDefaultState, action) => {
  console.log(action.payload,"singupreduces")
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
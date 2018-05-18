
import AuthService from '../services/authService';


const url = `http://localhost:3000/api/auth/signup`
export function newUser(userData) {
  console.log(userData)
  return {
    type: "SIGN_UP",
    payload: userData 
  }
  // return dispatch => {
  //   return AuthService.post(userData)
  //     .then(data => {
  //       dispatch({
  //         type: "SIGN_UP",
  //         payload: data
  //       })
  //     })
  //     .catch(error => console.log(error))
  // }

}
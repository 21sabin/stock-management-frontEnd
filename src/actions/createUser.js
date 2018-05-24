
import AuthService from '../services/authService';
import SIGN_UP from './action';
const url = `http://localhost:3000/api/auth/signup`
export function newUser(userData) {
  return dispatch => {
    return AuthService.post(userData)
      .then(data => {
        dispatch({
          type:"SIGN_UP",
          payload: data
        })
      })
      .catch(error => console.log(error))
  }

}
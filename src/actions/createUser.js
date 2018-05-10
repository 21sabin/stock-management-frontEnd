
import AuthService from '../services/authService';

// export function newUser (userData) {
//   console.log(userData,"userdata in middleware")
//     let url = `http://localhost:3000/api/auth/signup`;
//      return dispatch => {
//        return fetch(url,{
//          method: 'POST',
//          headers: {
//            "Content-Type": "application/json"
//          },
//          body:JSON.stringify(userData)
//          }
//        )
//          .then((resp) => {
//            dispatch({
//              type:"SIGN_UP"
//            })
//            console.log(resp,"response data")
//            return resp.json();
//          })
//          .catch((error) => {
//            dispatch(warningOccurred(error, url));
//          })
//      }
//    }
const url=`http://localhost:3000/api/auth/signup`
export function newUser(userData){
  return dispatch=>{
    return AuthService.post(userData)
    .then(data=>console.log(data,"created user"))
    .catch(error=>console.log(error))
  }
    
}
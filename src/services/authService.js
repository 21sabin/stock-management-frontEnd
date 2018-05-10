class AuthService {
    static baseUrl = 'http://localhost:3000/api/auth';
  
    static post (user) {
      console.log(user,"authservice")
        const url = AuthService.baseUrl;
  
        return fetch(url+"/signup", {
          headers: {
            Content_Type:"application/json"
          },
          method:"POST",
          body:JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        })
    }
  }
  
  export default AuthService;
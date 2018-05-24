class AuthService {
    static baseUrl = 'http://localhost:3000';
  
    static post (user) {
        const url = AuthService.baseUrl;
        console.log(JSON.stringify(user));
        return fetch("http://localhost:3000/api/auth/login", {
          headers: {
            Content_Type:"application/json"
          },
          method:"post",
          body:JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        })
    }
  }
  
  export default AuthService;
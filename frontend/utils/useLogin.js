import axios from "./connection"

const useLogin = ({ email , password }) => 
{
  if(!email || !password)
  {
    return
  }

  const userData = axios({
    method : "GET",
    url : "/auth/login",
    params : {
      email : email,
      password : password
    }
  }).then(res => {
    if(res.status === 200)
    {
      return res.data
    }
    
  }).catch(err => {
    console.error(err); 
    return
  })


  return userData
}

export default useLogin
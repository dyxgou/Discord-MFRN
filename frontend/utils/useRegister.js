import axios from "./connection"


const useRegister = async({ name , password , email }) => 
{
  if(!(name || password || email))
  {
    return
  }

  const userRegister = await axios({
    method : "POST",
    url : "/auth/register",
    data : {
      email : email,
      password : password,
      name : name
    }
  }).then(res => {
    if(res.status === 201)
    {
      return res.data
    }
    return
  }).catch(err => {
    console.error(err);
    return
  })

  return userRegister
}


export default useRegister
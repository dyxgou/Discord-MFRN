import { useState } from "react"

const useInput = ({ type="text" , initialValue="" , placeholder="" }) =>
{
  const [ value , setValue] = useState(initialValue)

  const onChange = (e) => setValue(e.target.value)

  return {
    value , 
    onChange ,
    placeholder ,
    type
  }
}


export default useInput
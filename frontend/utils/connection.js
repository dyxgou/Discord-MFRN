import axios from "axios"

const data = axios.create({
  baseURL : "http://[::1]:8000"
})

export default data
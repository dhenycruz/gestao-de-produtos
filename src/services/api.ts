import axios from 'axios'

const api = axios.create({
  baseURL: 'http://200.169.68.106:9995/api'
})

export default api

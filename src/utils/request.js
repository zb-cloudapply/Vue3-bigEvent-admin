import axios from 'axios'

const BASE_URL = 'http://big-event-vue3'

const instance = axios.create({})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
export { BASE_URL }

import axios from "axios"

export default ({ href, method = "GET", data, headers }) => (
  request(method, href, data, headers)
  .then(response => response.data)
)

const request = (method, url, data, headers = {}) => {
  let params = {}
  if (data && method.toLowerCase() === "get") {
    params = data
    data = null
  }
  try {
    return axios({
      url,
      method,
      data,
      params,
      headers,
      validateStatus: (status) => (status >= 200 && status < 300) || status === 304,
      timeout: 20000,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

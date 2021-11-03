import  axios from 'axios'

export const fetch = (url) => {
    return axios.get(url)
}

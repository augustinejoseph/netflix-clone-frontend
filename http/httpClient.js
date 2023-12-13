import axios from 'axios'
import { BASE_URL } from '../constants/constants'
import { TOKEN } from '../constants/constants'


const createHttpClient = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-type": 'Application/json'
        }

    });
    instance.interceptors.request.use(
        (config) => {
            if (TOKEN) {
                config.headers.Authorization = `Bearer ${TOKEN}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
    return instance
}
export default createHttpClient;
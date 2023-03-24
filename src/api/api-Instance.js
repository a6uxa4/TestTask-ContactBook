import axios from 'axios'
import { baseURL } from '../utils/constants'

const apiInstance = axios.create({
	baseURL: baseURL,
})

export default apiInstance

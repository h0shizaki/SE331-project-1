// @ts-ignore
import axios, {AxiosInstance, AxiosResponse} from 'axios'
import type {EventItem} from "@/type";


const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const getEvent = (perPage: number = 2 , page: number = 1): Promise<AxiosResponse<EventItem[]>> => {
    return apiClient.get<EventItem[]>(`/events?_limit=${perPage}&_page=${page}`);
}

const getEventById = (id: number): Promise<AxiosResponse<EventItem>> => {
    return apiClient.get<EventItem>('events/' + id.toString())
}

export default {getEvent, getEventById}
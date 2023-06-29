// @ts-ignore
import axios, {AxiosInstance, AxiosResponse} from 'axios'
import type {EventItem} from "@/type";


const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const getEvent = (): Promise<AxiosResponse<EventItem[]>> => {
    return apiClient.get<EventItem[]>('/events');
}

const getEventById = (id: number): Promise<AxiosResponse<EventItem>> => {
    return apiClient.get<EventItem>('events/' + id.toString())
}

export default {getEvent, getEventById}
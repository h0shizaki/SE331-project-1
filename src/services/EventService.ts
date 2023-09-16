// @ts-ignore
import axios, {AxiosInstance, AxiosResponse} from 'axios'
import type {EventItem, OrganzierItem} from "@/type";


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
    return apiClient.get<EventItem>('/events/' + id.toString())
}

const saveEvent = (event: EventItem): Promise<AxiosResponse<EventItem>> => {
    return apiClient.post<EventItem>('/events', event)
}

const getOrganizers = () : Promise<AxiosResponse<OrganzierItem[]>> => {
    return apiClient.get<OrganzierItem[]>(`/organizers`);
}

const saveOrganizers = (org : OrganzierItem): Promise<AxiosResponse<OrganzierItem>> => {
    return apiClient.post<OrganzierItem>('/organizers' , org)
}

export default {getEvent, getEventById, getOrganizers, saveEvent, saveOrganizers}
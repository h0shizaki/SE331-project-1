// @ts-ignore
import axios, {AxiosInstance, AxiosResponse} from 'axios'
import type {EventItem, OrganizerItem} from "@/type";


const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const getOrganizers = () : Promise<AxiosResponse<OrganizerItem[]>> => {
    return apiClient.get<OrganizerItem[]>(`/organizers`);
}

const saveOrganizers = (org : OrganizerItem): Promise<AxiosResponse<OrganizerItem>> => {
    return apiClient.post<OrganizerItem>('/organizers' , org)
}

export default { getOrganizers, saveOrganizers}
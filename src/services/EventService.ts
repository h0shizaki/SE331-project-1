// @ts-ignore
import { AxiosResponse } from 'axios'
import type { EventItem } from '@/type'

import apiClient from '@/services/AxiosClient'
const getEvent = (perPage: number = 3, page: number = 1): Promise<AxiosResponse<EventItem[]>> => {
  return apiClient.get<EventItem[]>(`/events?_limit=${perPage}&_page=${page}`)
}

const getEventsByKeyword = (
  keyword: string,
  perPage: number = 3,
  page: number = 1
): Promise<AxiosResponse<EventItem[]>> => {
  return apiClient.get<EventItem[]>(`/events?_limit=${perPage}&_page=${page}&title=${keyword}`)
}

const getEventById = (id: number): Promise<AxiosResponse<EventItem>> => {
  return apiClient.get<EventItem>('/events/' + id.toString())
}

const saveEvent = (event: EventItem): Promise<AxiosResponse<EventItem>> => {
  return apiClient.post<EventItem>('/events', event)
}

export default { getEvent, getEventById, getEventsByKeyword, saveEvent }

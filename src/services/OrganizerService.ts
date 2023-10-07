// @ts-ignore
import { AxiosResponse } from 'axios'

import apiClient from '@/services/AxiosClient'
import type { OrganizerItem } from '@/type'

const getOrganizers = (): Promise<AxiosResponse<OrganizerItem[]>> => {
  return apiClient.get<OrganizerItem[]>(`/organizers`)
}

const getOrganizerById = (id: number): Promise<AxiosResponse<OrganizerItem>> => {
  return apiClient.get<OrganizerItem>(`/organizers/${id}`)
}

const saveOrganizers = (org: OrganizerItem): Promise<AxiosResponse<OrganizerItem>> => {
  return apiClient.post<OrganizerItem>('/organizers', org)
}

export default { getOrganizers, saveOrganizers, getOrganizerById }

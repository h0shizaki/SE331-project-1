// @ts-ignore
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import type { StudentItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://dv-student-backend-2019.appspot.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
const getStudent = (): Promise<AxiosResponse<StudentItem[]>> => {
  return apiClient.get<StudentItem[]>('/students')
}

export default { getStudent }

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: OrganizerItem
  images: string[]
}

export interface OrganizerItem {
  id: number
  organizationName: string
  address: string
  images: string[]
  roles: string[]
}

export interface StudentItem {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
  penAmount: number
  description: string
}

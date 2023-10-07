import { defineStore } from 'pinia'
import type { EventItem } from '@/type'

export const useEventStore = defineStore('event', {
  state: () => ({
    event: null as EventItem | null
  }),
  actions: {
    setEvent(event: EventItem) {
      this.event = event
    }
  }
})

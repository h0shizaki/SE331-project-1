import {defineStore} from "pinia";
import type {OrganizerItem} from "@/type";

export const useOrganizerStore = defineStore('organizer', {
    state: () => ({
        organizer: null as OrganizerItem | null
    }),
    actions: {
        setOrganizer(organizer: OrganizerItem) {
            this.organizer = organizer
        }
    }
})
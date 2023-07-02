import {defineStore} from "pinia";

export const useMassageStore = defineStore('message', {
    state: () => ({
        message: '' as string
    }),
    actions: {
        updateMessage(message : String) {
            this.message = message
        },
        resetMessage() {
            this.message = ''
        }
    }
})
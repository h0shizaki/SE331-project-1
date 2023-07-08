import {defineStore} from "pinia";

export const useMassageStore = defineStore('message', {
    state: () => ({
        message: '' as String
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
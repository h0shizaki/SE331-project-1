<script setup lang="ts">
import InputText from '@/components/InputText.vue'

import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const validationSchema = yup.object({
  email: yup.string().required('The email is required'),
  password: yup.string().required('The password is required')
})

const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    email: '',
    password: ''
  }
})

const authStore = useAuthStore()

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')
const router = useRouter()
const messageStore = useMessageStore()
const onSubmit = handleSubmit((values) => {
  // console.log(values)
  authStore
    .login(values.email, values.password)
    .then(() => {
      console.log('Login Success')
      router.push({ name: 'eventList' })
    })
    .catch((err) => {
      messageStore.updateMessage('Could not login')
      console.log(err)
      setTimeout(() => {
        messageStore.resetMessage()
      }, 3000)
      // console.log('error', err)
    })
})
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-items-center px-6 py-12 lg:px-8">
    <form action="#" method="POST" @submit.prevent="onSubmit">
      <InputText type="text" v-model="email" :error="errors['email']"></InputText>
      <InputText type="password" v-model="password" :error="errors['password']"></InputText>
      <p class="mt-10 text-center text-sm text-gray-400">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600">Try to register here</a>
      </p>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped></style>

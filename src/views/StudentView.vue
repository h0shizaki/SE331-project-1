<script setup lang="ts">

import {ref} from "vue";
import type {StudentItem} from "@/type";
import StudentService from "@/services/StudentService";
import StudentCard from "@/components/StudentCard.vue";

const studentList = ref<Array<StudentItem>>([])

StudentService.getStudent()
    .then(
        (res) => {
          studentList.value = res.data as StudentItem[]
        }
    )
</script>

<template>
  <h1 class="text-green-700 font-bold text-2xl m-3" >Student List</h1>
  <main class="flex flex-col items-center">
    <StudentCard v-for="student in studentList" :key="student.id" :student="student"></StudentCard>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h4 {
  font-size: 20px;
}
</style>
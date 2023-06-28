<script setup lang="ts">

import {defineProps, PropType} from "vue";
import type {StudentItem} from "@/type";


const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>

<template>
  <div class="student-card">
    <span>
      <b class="text-title">name: </b>
      {{ props.student.name }}  {{ props.student.surname }}
    </span>
    <span>
      <b class="text-title">gpa: </b>
      {{ props.student.gpa }}
    </span>
  </div>
</template>

<style scoped>

.text-title {
  opacity: 0.75;
}

.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  font-size: 1rem;
}

.student-card span {
  display: block;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
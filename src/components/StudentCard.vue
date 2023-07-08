<script setup lang="ts">
import type {PropType} from "vue";
import type {StudentItem} from "@/type";


const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    required: true
  }
})
</script>

<template>
  <div class="block cursor-pointer border border-green-800 bg-white rounded rounded-l mb-3 w-64 h-24 hover:border-green-500 hover:bg-gray-100 drop-shadow-lg" >
    <div class="mb-2 font-bold p-3 font-bold tracking-tight">
      <span>
        <span class="font-bold text-green-500 uppercase">{{ props.student.name }}  {{ props.student.surname }}</span>
      </span>
      <br><hr>
      <span>
        <b class="text-green-700">GPA: </b>
        <span class="font-bold text-green-500 uppercase">{{ props.student.gpa }}</span>
      </span>
    </div>
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
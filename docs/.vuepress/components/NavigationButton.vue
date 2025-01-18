<template>
  <button 
    class="nav-button" 
    @click="handleClick"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  buttonText: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
})

const router = useRouter()

const handleClick = () => {
  router.push(props.path)
}
</script>

<style scoped>
.nav-button {
  padding: 10px 20px;
  background-color: #3eaf7c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
}

.nav-button:hover {
  background-color: #2c8f5d;
}
</style> 
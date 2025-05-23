<template>
  <div class="flex flex-col gap-8">
    <div class="w-2xl text-center">
      <h1 class="text-white text-5xl font-bold line-clamp-2">Your Journey yo Coding Conf 2025 Starts Here!</h1>
      <p class="text-neutral-300 text-xl mt-5">Secure your spot at next year's biggest coding conference.</p>
    </div>

    <div class="mx-20">
      <DragAndDropInput v-model="img"  />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DragAndDropInput from '@/components/DragAndDropInput.vue';

const img = ref([])
</script>
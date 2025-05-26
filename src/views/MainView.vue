<template>
  <div class="flex flex-col gap-8">
    <div class="md:w-2xl text-center">
      <h1 class="text-white text-2xl md:text-5xl font-bold md:line-clamp-2">Your Journey yo Coding Conf 2025 Starts
        Here!</h1>
      <p class="text-neutral-300 md:text-xl mt-5">Secure your spot at next year's biggest coding conference.</p>
    </div>

    <div class="flex flex-col gap-10 md:mx-20 mb-10">
      <DragAndDropInput v-model="img" label="Upload Avatar" />
      <TextInput label="Full name" name="name" />
      <TextInput label="Email Address" name="email" placeholder="example@email.com" />
      <TextInput label="GitHub Username" name="github" placeholder="@yourusername" />
      <Button class="bg-orange-500 border-none text-neutral-900 font-bold text-lg p-3 hover:bg-orange-700">
        Generate My Ticket
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import { ref } from 'vue';
import DragAndDropInput from '@/components/DragAndDropInput.vue';
import TextInput from '@/components/TextInput.vue';

const img = ref([])
</script>
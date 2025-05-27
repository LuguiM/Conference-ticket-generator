<template>
  <div v-if="!ticket" class="flex flex-col gap-8">
    <div class="md:w-2xl text-center">
      <h1 class="text-white text-2xl md:text-5xl font-bold md:line-clamp-2">Your Journey yo Coding Conf 2025 Starts
        Here!</h1>
      <p class="text-neutral-300 md:text-xl mt-5">Secure your spot at next year's biggest coding conference.</p>
    </div>

    <div class="flex flex-col gap-10 md:mx-20 mb-10">
      <DragAndDropInput v-model="data.imagen" label="Upload Avatar" :validarInputFile="validarInputFile"
        :messageErrorInputFile="messageErrorInputFile" />
      <TextInput v-model="data.name" label="Full name" name="name" />
      <TextInput v-model="data.email" label="Email Address" name="email" placeholder="example@email.com"
        :validarInput="emailValid" :messageErrorInput="messageErrorEmail" />
      <TextInput v-model="data.github" label="GitHub Username" name="github" placeholder="@yourusername" />
      <Button @click="createTicket"
        class="bg-orange-500 border-none text-neutral-900 font-bold text-lg p-3 hover:bg-orange-700">
        Generate My Ticket
      </Button>
    </div>
  </div>

  <TicketCreate :data="data" v-else />

</template>

<script setup>
import Button from 'primevue/button'
import { ref } from 'vue';
import DragAndDropInput from '@/components/DragAndDropInput.vue';
import TextInput from '@/components/TextInput.vue';
import TicketCreate from './TicketCreate.vue';

const data = ref({
  imagen: null,
  name: '',
  email: '',
  github: ''
});

const ticket = ref(false);
const validarInputFile = ref(true);
const messageErrorInputFile = ref('');
const emailValid = ref(true);
const messageErrorEmail = ref('')

const validarImg = () => {

  if (typeof data.value.imagen === 'string') {
    return false;
  }

  let totalFiles = data.value.imagen === null ? 0 : data.value.imagen.length;

  if (totalFiles > 1) {
    validarInputFile.value = false;
    messageErrorInputFile.value = `Solo se permite subir una imagen`;
    return true;
  }

  if (totalFiles < 1) {
    validarInputFile.value = false;
    messageErrorInputFile.value = "Este campo es obligatorio";
    return true;
  }

  validarInputFile.value = true;
  messageErrorInputFile.value = '';
  return false;
};

const validateEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valid = emailRegex.test(data.value.email.trim());

  if (!valid) {
    emailValid.value = false;
    messageErrorEmail.value = "Por favor ingresa un correo válido";
    return true;
  }

  emailValid.value = true;
  messageErrorEmail.value = '';
  return false;
}

const createTicket = () => {

  const imgValid = validarImg();
  const emailValid = validateEmail();
  if (imgValid || emailValid) {
    return;
  }

  ticket.value = true;
}
</script>
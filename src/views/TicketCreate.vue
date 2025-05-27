<template>
    <div class="flex flex-col gap-8 justify-center items-center">
        <div class="md:w-2xl text-center">
            <h1 class="text-white text-2xl md:text-5xl font-bold md:line-clamp-2">
                Congrats, <span class="text-orange-300">{{ data?.name }}</span>!
                Your ticket is ready.
            </h1>
            <p class="text-neutral-300 md:text-xl mt-5">
                We've emailed yout ticket to <span class="text-orange-700">{{ data?.email }}</span> and will send
                updates in the run up to the event.
            </p>
        </div>

        <div class="relative md:w-[520px] md:h-[260px] rounded-2xl overflow-hidden text-white font-sans">
            <img src="@/assets/images/pattern-ticket.svg" alt="ticket"
                class="absolute inset-0 w-full h-full object-cover z-0" />

            <div class="relative z-10 flex flex-col justify-between h-full p-6">
                <div>
                    <img src="../assets/images/logo-full.svg" alt="logo" class="w-32 md:w-50" />
                    <p class="md:text-sm text-neutral-300 mt-1">Jan 31, 2025 / Austin, TX</p>
                </div>

                <div class="flex items-center gap-4">
                    <div v-for="(file, index) in data.imagen" :key="file.name + file.size">
                        
                        <img :src="file.objectURL" alt="Avatar" class="w-10 md:w-16 md:h-16 rounded-lg object-cover" />
                    </div>
                    <div>
                        <h3 class="font-semibold text-lg leading-none">{{ data?.name }}</h3>
                        <p class="text-sm text-neutral-300 leading-none">{{ data?.github }}</p>
                    </div>
                </div>
            </div>

            <div
                class="absolute -right-5 md:right-4 top-1/2 -translate-y-1/2 rotate-90 text-white/30 text-lg tracking-widest font-mono z-10">
                {{ ticketNumber }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref, computed } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const ticketNumber = ref('');

const generarTicketNumber = () => {
  const numero = Math.floor(1000 + Math.random() * 9000);
  return `#${numero}`;
};

onMounted(() => {
  ticketNumber.value = generarTicketNumber();
});


</script>

<style></style>
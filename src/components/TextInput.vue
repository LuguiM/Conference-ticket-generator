<template>
    <div class="flex flex-col gap-2">
        <label :for="props.name" class="text-neutral-0"> {{ props.label }} </label>
        <InputText :id="props.name" :modelValue="props.modelValue"
            @update:modelValue="emit('update:modelValue', $event)" :placeholder="props.placeholder"
            :invalid="!props.validarInput" :aria-invalid="!props.validarInput" :disabled="props.disabled"
            class="bg-neutral-500/10 focus:border-neutral-500 rounded-xl text-neutral-0 p-4 hover:bg-neutral-0/10" />
        <div v-if="!props.validarInput" class="flex gap-1 mt-4 text-xs">
            <p class="text-orange-500">{{ props.messageErrorInput }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    },
    validarInput: {
        type: Boolean,
        required: false,
        default: true
    },
    messageErrorInput: {
        type: String,
        required: false
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    }
});
const emit = defineEmits(['update:modelValue']);


</script>

<style></style>
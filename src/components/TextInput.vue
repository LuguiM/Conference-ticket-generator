<template>
    <div class="flex flex-col gap-2">
        <label :for="props.name" class="text-neutral-0"> {{ props.label }} </label>
        <InputText :id="props.name" v-model="props.modelValue" :placeholder="props.placeholder"
            class="bg-neutral-500/10 focus:border-neutral-500 rounded-xl text-neutral-0 p-4 hover:bg-neutral-0/10" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    modelValue: {
        type: [Array, null, String],
        required: true,
        default: () => []
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
        required: true
    },
    messageErrorInput: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    }
});

</script>

<style lang="scss" scoped></style>
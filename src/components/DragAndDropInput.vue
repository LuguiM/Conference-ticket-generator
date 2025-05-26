<template>
    <div>
        <p class="text-neutral-0 mb-3">{{ props.label }}</p>
        <FileUpload :key="uploadKey" unstyled :multiple="props.multiple" accept="image/jpeg,image/png"
            :maxFileSize="5000000" @select="onSelectFile" :disabled="props.disabled" :pt="{
                root: { class: validarInputFile ? 'file-upload border-dashed border-2 rounded-[10px] bg-blue' : 'file-upload bg-white/10 border-dashed border-2 border-neutral-500 rounded-[10px]' },
                buttonbar: { class: 'flex justify-center items-center' },
                content: { class: 'px-5 pb-5 pt-4' }
            }">
            <template #header="{ chooseCallback }">
                <div class="flex justify-center items-center mx-auto mt-6">
                    <div v-if="images.length === 0"
                        class="border border-neutral-500 bg-white/10 rounded-2xl w-16 p-3 cursor-pointer"
                        @click="chooseCallback()">
                        <img class="w-full h-auto" alt="add-picture" :src="LogoAddPicture">
                    </div>
                </div>
            </template>

            <template #content="{ removeFileCallback }">
                <div class="flex flex-wrap justify-center items-center p-0 gap-2">
                    <div v-for="(file, index) in images" :key="file.name + file.size"
                        class="flex flex-col items-center justify-center w-[25rem] gap-3">
                        <div>
                            <Image alt="Image" :src="file.objectURL" preview :pt="{
                                root: { class: 'w-[6rem] h-24' },
                                image: { class: 'w-full h-24 object-cover rounded-2xl mx-auto' }
                            }" />
                        </div>

                        <!-- <div>
                            <span class="font-semibold text-whit">{{ truncarCadena(file.name) }}</span>
                        </div> -->

                        <div v-if="!props.disabled" class="flex flex-col md:flex-row gap-3">
                            <Button @click="onRemoveFile(removeFileCallback, index)" outlined raised size="small" class="bg-neutral-400/10 text-white border-none">
                                Remove image
                            </Button>
                        </div>
                    </div>
                </div>
            </template>

            <template #empty v-if="images.length === 0">
                <div class="flex flex-col items-center justify-center text-center">
                    <p class="text-base font-bold text-neutral-500">Drag and drop or click to upload</p>
                </div>
            </template>
        </FileUpload>


        <div v-if="!validarInputFile" class="flex gap-1 mt-4 text-xs">
            <img src="../assets/images/icon-info.svg" alt="">

            <p v-if="!validarInputFile" class="text-neutral-300 text-xs">Upload yout photo (JPG or PNG, max size 500KB).</p>

            <p v-else class="text-red-500">{{ messageErrorInputFile }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, onUpdated } from 'vue';
import LogoAddPicture from '../assets/images/icon-upload.svg';


const props = defineProps({
    modelValue: {
        type: [Array, null, String],
        required: true,
        default: () => []
    },
    validarInputFile: {
        type: Boolean,
        required: true
    },
    messageErrorInputFile: {
        type: String,
        required: true
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    label: {
        type: String,
        required: false
    }
});

const emit = defineEmits(['update:modelValue']);

const images = ref(props.modelValue);
const uploadKey = ref(0);


const onSelectFile = (event) => {

    if (event.files.length === 0) {

        // Notificacion
        return
    }

    if (props.multiple) {
        images.value = event.files;
        emit('update:modelValue', event.files);
        return;
    }

    const lastFile = event.files[event.files.length - 1];
    images.value = [lastFile];
    console.log('Desde el componenete', [lastFile]);
    emit('update:modelValue', [lastFile]);

};

const onRemoveFile = (removeCallback, index) => {
    removeCallback(index);
    images.value.splice(index, 1);
    emit('update:modelValue', images.value);

    if (images.value.length === 0) {
        uploadKey.value++;
    }
};


const truncarCadena = (cadena, maxLength = 15) => {
    return cadena.length > maxLength ? cadena.substring(0, maxLength) + '...' : cadena;
};

const getUrlImage = (image) => {
    return `${import.meta.env.VITE_VUE_APP_API_URL}/storage/${image}`;
};

watchEffect(() => {
    if (typeof props.modelValue === 'string' && props.modelValue.trim() !== '') {
        // images.value = [{
        //     name: props.modelValue.split('/').pop(),
        //     objectURL: getUrlImage(props.modelValue),
        //     size: 0
        // }];
    } else {
        images.value = props.modelValue === null ? [] : props.modelValue;

    }
});

</script>

<style>
.file-upload input {
    display: none;
}
</style>
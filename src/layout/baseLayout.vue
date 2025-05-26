<script setup>
import { RouterView } from 'vue-router';
</script>

<template>

    <div>

    </div>
    <main class="min-h-screen flex flex-col items-center justify-center my-10 px-5">
        <img src="../assets/images/logo-full.svg" alt="logo-full" class="mx-auto my-auto">
        <div>
            <router-view />
        </div>
        <footer class="text-white mt-auto">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
            Coded by <a href="#">Luis M</a>.
        </footer>
    </main>
</template>

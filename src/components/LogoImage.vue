<template>
    <v-container>
        <v-img v-if="theme.global.current.value.dark" class="clickable-image mr-4" src="../assets/logo-bw.png"
            alt="Brand Logo" max-width="150" @click="goToHome"></v-img>
        <v-img v-else src="../assets/logo.png" alt="Brand Logo" max-width="150" class="clickable-image mr-4"
            @click="goToHome"></v-img>
    </v-container>
</template>

<script setup>

import { useTheme } from 'vuetify'
import router from '@/router'

const theme = useTheme()

function goToHome() {
    router.push("/")
}

</script>

<style lang="css" scoped>
.clickable-image {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.clickable-image:hover {
    transform: scale(1.05);
}
</style>
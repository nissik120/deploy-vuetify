<template>
    <v-img v-if="theme.global.current.value.dark" src="../assets/logo-bw.png" alt="Brand Logo" max-width="150"
        class="mr-4"></v-img>
    <v-img v-else src="../assets/logo.png" alt="Brand Logo" max-width="150" class="mr-4"></v-img>
</template>

<script setup>

import { useTheme } from 'vuetify'
const theme = useTheme()

</script>

<style lang="scss" scoped></style>
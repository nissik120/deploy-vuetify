<template>
    <v-container app class="ma-auto">
        <v-toolbar prominent class="bg-transparent">

            <v-img v-if="theme.global.current.value.dark" src="../assets/logo-bw.png" alt="Brand Logo" max-width="150"
                class="mr-4"></v-img>
            <v-img v-else src="../assets/logo.png" alt="Brand Logo" max-width="150" class="mr-4"></v-img>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
            <span>
                <v-switch @update:model-value="toggleTheme" :false-icon="'mdi-weather-sunny'"
                    :true-icon="'mdi-weather-night'" hide-details inset></v-switch>
            </span>
            <span class="hidden-md-and-up">
                <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
            </span>
        </v-toolbar>

        <v-navigation-drawer v-model="sidebar" temporary>
            <v-list-item :title="appTitle" :subtitle="appSubTitle"></v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in menuItems" link :title="item.title" :to="item.path"></v-list-item>



        </v-navigation-drawer>
    </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()
const appTitle = ref("E'S Fashion")
const appSubTitle = ref('Mode & Anderungen')
const sidebar = ref(false)
const menuItems = ref([
    { title: 'Home', path: '/' },
    { title: 'Boutique', path: '/boutique' },
    { title: 'Alterier', path: '/alterier' },
    { title: 'Über Uns', path: '/about-us' },
])

const getLogoName = computed(() => {
    return theme.global.current.value.dark ? 'logo-bw' : 'logo'
})

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
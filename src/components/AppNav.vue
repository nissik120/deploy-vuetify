<template>
    <v-container app class="ma-auto">
        <v-toolbar prominent class="bg-transparent">

            <LogoImage />

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
                <AuthModalView />
            </v-toolbar-items>
            <span>
                <v-btn class="text-none" stacked :to="cartMenuItem.path">
                    <v-badge v-if="updateCartCount != 0" color="error" :content="updateCartCount">
                        <v-icon>mdi-cart</v-icon>
                    </v-badge>
                    <v-icon v-else>mdi-cart</v-icon>
                </v-btn>
            </span>
            <span>
                <v-switch @update:model-value="toggleTheme" :false-icon="'mdi-weather-sunny'"
                    :true-icon="'mdi-weather-night'" hide-details inset></v-switch>
            </span>
            <span class="hidden-md-and-up">
                <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
            </span>
        </v-toolbar>

        <v-navigation-drawer v-model="sidebar" temporary>
            <LogoImage />
            <v-divider></v-divider>
            <v-list-item v-for="item in menuItems" link :title="item.title" :to="item.path"></v-list-item>
            <v-divider></v-divider>
            <div class="text-center pa-4">
                <v-btn class="pa-2" density="default" variant="elevated" color="primary"
                    @click="dialogStore.openDialog(1)">
                    {{ authStore.user !== null ? 'Logout' : 'Sign In' }}
                </v-btn>
            </div>

        </v-navigation-drawer>

        <AppModalView />

    </v-container>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { cartStore } from '@/stores/cartstore'
import { userAuthStore } from '@/stores/authstore'
import { appDialogStore } from "@/stores/dialogstore"
import { auth } from "@/firebase/init.js"
import { onAuthStateChanged } from 'firebase/auth'

const authStore = userAuthStore()
const myCartStore = cartStore()
const dialogStore = appDialogStore()

const theme = useTheme()
const appTitle = ref("E'S Fashion")
const appSubTitle = ref('Mode & Anderungen')

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            authStore.setUser(currentUser)
        } else {
            authStore.setUser(null)
        }
    })
})

const updateCartCount = computed(() => {
    let cartCount = myCartStore.getCartList().reduce((count, item) => count + item.quantity, 0)
    return cartCount ?? 0
})

const sidebar = ref(false)
const menuItems = ref([
    { title: 'Home', path: '/' },
    { title: 'Boutique', path: '/boutique' },
    { title: 'Alterier', path: '/alterier' },
    { title: 'Über Uns', path: '/about-us' },
])

const cartMenuItem = ref({
    title: 'Cart', path: '/shopping-cart'
})

function toggleTheme() {
    const currentTheme = theme.global.name.value
    theme.global.name.value = currentTheme === 'dayTheme' ? 'nightTheme' : 'dayTheme'
}

</script>
<template>
    <div class="ma-2">
        <div class="py-6">
            <h1>Shopping Cart</h1>
        </div>
        <div v-if="!authStore.user">
            <UnsignedCartView />
        </div>
        <div v-else>

            <LoadedCartView v-if="getCartList > 0" />
            <EmptyCartView v-else />

        </div>
    </div>
</template>

<script setup>

import { ref, computed, onMounted } from "vue"
import { auth } from "@/firebase/init.js"
import { onAuthStateChanged } from "firebase/auth"
import { cartStore } from "@/stores/cartstore"
import { userAuthStore } from '@/stores/authstore'

const myCartStore = cartStore()
const authStore = userAuthStore()

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            authStore.setUser(currentUser)
            myCartStore.fetchCartItems(currentUser)
        } else {
            authStore.setUser(null)
        }
    })
})


const getCartList = computed(() => {
    return myCartStore.getCartCount
})

</script>

<style></style>
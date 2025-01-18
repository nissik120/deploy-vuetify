<template>
    <v-container class="text-center">
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card elevation="3" class="pa-8">
                    <v-icon size="64" color="green">mdi-check-circle</v-icon>
                    <h2 class="mt-4">Payment Successful!</h2>
                    <p class="mt-2">
                        Thank you for your purchase. Your order has been processed successfully.
                    </p>
                    <v-btn color="primary" class="mt-4" @click="goToShop">Go Back to Shop</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { cartStore } from '@/stores/cartstore'
import router from '@/router'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase/init.js'
import { onMounted } from 'vue'


const myCartStore = cartStore()

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            myCartStore.clearCart(currentUser)
        }
    });
})


const goToShop = () => {
    router.push("/boutique")
}

</script>

<style lang="scss" scoped></style>
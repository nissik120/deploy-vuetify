<template>
    <v-container class="text-center">
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card elevation="3" class="pa-8">
                    <v-icon size="64" color="red">mdi-cancel</v-icon>
                    <h2 class="mt-4">Payment Canceled</h2>
                    <p class="mt-2">
                        Your payment was not completed. You can retry or return to the shop.
                    </p>
                    <v-btn color="error" class="mt-4" @click="retryPayment">Retry Payment</v-btn>
                    <v-btn color="secondary" class="mt-4" outlined @click="goToShop">Go Back to Shop</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import router from '@/router'

const goToShop = () => {
    router.push("/boutique")
}

const retryPayment = () => {
    router.push("/shopping-cart")
}

</script>

<style lang="scss" scoped></style>
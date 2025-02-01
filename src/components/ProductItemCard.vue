<template>

    <v-container>

        <v-card color="surface-variant" min-width="240" max-width="340" hover ripple @click="onCardClick">
            <v-img height="200px" :src="productItem.images[0] || 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
                cover></v-img>
            <v-card-title>
                {{ productItem.name }}
            </v-card-title>
            <v-card-subtitle>
                {{ priceFormatter(productItem.priceInfo["unit_amount"]) }}
            </v-card-subtitle>
            <v-card-actions>
                <v-btn :text="productItem.active ? 'Preview' : 'Out of Stock'" variant="outlined"
                    :disabled="!productItem.active"></v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog width="auto" v-model="dialog">

            <v-card class="mx-auto">

                <v-list-item height="88" class="pa-4">
                    <template v-slot:title>Product Details</template>
                    <template v-slot:append>
                        <v-btn class="text-none" color="primary" text="Close" variant="text"
                            @click="closeProductDetailsView" slim></v-btn>
                    </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-carousel color="orange">
                    <v-carousel-item v-for="(imagesInfo, i) in productItem.images" :key="i" :src="imagesInfo"
                        :alt="imagesInfo.alt" cover>
                    </v-carousel-item>
                </v-carousel>

                <v-divider></v-divider>
                <v-card-item>
                    <v-card-title>{{ productItem.name }}</v-card-title>

                    <v-card-subtitle>
                        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                    </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating :model-value="4.5" color="amber" density="compact" size="small" half-increments
                            readonly></v-rating>

                        <div class="text-grey ms-4">
                            4.5 (413)
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                        {{ priceFormatter(productItem.priceInfo["unit_amount"]) }}
                    </div>

                    <div>{{ productItem.description }}</div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-title>Sizes</v-card-title>

                <div class="px-4 mb-2">
                    <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
                        <v-chip>XS</v-chip>

                        <v-chip>S</v-chip>

                        <v-chip>M</v-chip>

                        <v-chip>L</v-chip>

                        <v-chip>XL</v-chip>
                    </v-chip-group>
                </div>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn color="blue" text="Add To Cart"
                        @click="executeAddToCart(authStore.user, productItem.priceId)"></v-btn>
                    <v-btn color="orange" text="Buy Now"
                        @click="executeBuyNow(authStore.user, productItem.priceId)"></v-btn>
                </v-card-actions>

            </v-card>

        </v-dialog>

    </v-container>
</template>

<script setup>

import { appDialogStore } from "@/stores/dialogstore"
import { cartStore } from '@/stores/cartstore'
import { userAuthStore } from '@/stores/authstore'
import { auth } from "@/firebase/init.js"
import { onAuthStateChanged } from 'firebase/auth'
import { onMounted } from 'vue'
import router from '@/router'

const props = defineProps(['productItem'])

const dialogStore = appDialogStore()
const myCartStore = cartStore()
const authStore = userAuthStore()

const dialog = ref(false)
const selection = ref(null)

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            authStore.setUser(currentUser)
        } else {
            authStore.setUser(null)
        }
    })
})

const priceFormatter = (price) => {
    let scaledPrice = price / 100
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        scaledPrice,
    );
}

async function executeAddToCart(user, currentPriceId) {
    if (authStore.user) {
        await myCartStore.addToCart(user, currentPriceId)
    } else {
        dialogStore.openDialog(1)
    }
}

async function executeBuyNow(user, currentPriceId) {
    if (authStore.user) {
        await myCartStore.addToCart(user, currentPriceId)
        await myCartStore.fetchCartItems(user)
        router.push('/shopping-cart')
    } else {
        dialogStore.openDialog(1)
    }
}

function onCardClick() {
    if (props.productItem.active) {
        dialog.value = true
    }
}

function closeProductDetailsView() {
    dialog.value = false
}

</script>

<style lang="scss" scoped></style>
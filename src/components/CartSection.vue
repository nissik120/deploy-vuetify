<template>
    <div class="ma-2">
        <div class="py-6">
            <h1>Shopping Cart</h1>
        </div>
        <div v-if="!user">
            <v-card class="my-2 mx-auto" subtitle="Please log in to access your cart...." title="Oh! Oh!"
                v-if="getCartList.length == 0"></v-card>
        </div>
        <div v-else>
            <!-- CART LIST -->
            <div class="d-flex py-2 justify-end">
                <v-btn color="warning" @click="clearCart(user)">
                    <v-icon>mdi-cart-remove</v-icon>
                </v-btn>
            </div>
            <v-card class="mx-auto" v-if="getCartList.length > 0">
                <v-list-item class="w-100" v-for="cartItem in getCartList">
                    <v-row class="pa-2">
                        <!-- Product Image -->
                        <v-col cols="3">
                            <v-img src="https://picsum.photos/100" alt="Product Image" :width="100" aspect-ratio="1"
                                cover></v-img>
                        </v-col>

                        <v-col cols="9">
                            <v-row>
                                <!-- Product Details -->
                                <v-col cols="12">
                                    <h4 class="mb-1">{{ cartItem.name }}</h4>
                                    <p class="grey--text mb-0"> {{ priceFormatter(cartItem.unit_price) }}</p>
                                </v-col>

                                <!-- Quantity Controls + Item Total -->
                                <v-col cols="12" class="d-flex align-center justify-end">

                                    <v-btn icon="mdi-minus" @click="decreaseQuantity(user, cartItem.priceId)"
                                        size="xx-small"></v-btn>

                                    <span class="mx-2">{{ cartItem.quantity }}</span>

                                    <v-btn icon="mdi-plus" @click="addToCart(user, cartItem.priceId)"
                                        size="xx-small"></v-btn>

                                    <div class="mx-4">
                                        <span> {{ getItemSubTotal(cartItem.priceId) }}</span>
                                    </div>
                                    <v-btn color="warning" @click="removeItemFromCart(user, cartItem.priceId)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>

                                </v-col>
                            </v-row>
                        </v-col>

                    </v-row>
                    <v-divider></v-divider>
                </v-list-item>
            </v-card>

            <!-- SUB TOTAL -->
            <v-card class="my-2 mx-auto" v-if="getCartList.length > 0">

                <v-list-item>
                    <template v-slot:title>
                        <span>Subtotal</span>
                    </template>
                    <template v-slot:append>
                        <span>{{ getTotalItemsPrice }}</span>
                    </template>
                </v-list-item>

                <v-list-item>
                    <template v-slot:title>
                        <span>Discount</span>
                    </template>
                    <template v-slot:append>
                        <span>- {{ getTotalDiscout() }}</span>
                    </template>
                </v-list-item>

                <v-list-item>
                    <template v-slot:title>
                        <span>Shipping & Handling</span>
                    </template>
                    <template v-slot:append>
                        <span>{{ getShippingCost() }}</span>
                    </template>
                </v-list-item>

                <v-list-item>
                    <template v-slot:title>
                        <span>Tax</span>
                    </template>
                    <template v-slot:append>
                        <span>{{ getValueAddedTax() }}</span>
                    </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                    <template v-slot:title>
                        <span class="font-weight-black">Subtotal</span> - {{ getItemCount }} Item(s)
                    </template>
                    <template v-slot:append>
                        <span class="font-weight-black">{{ getTotalSum }}</span>
                    </template>
                </v-list-item>

                <template v-slot:actions>
                    <v-btn append-icon="mdi-chevron-right" @click="executeCheckout(user)" color="red-lighten-2"
                        text="Checkout" variant="outlined" block>
                    </v-btn>
                </template>

            </v-card>

        </div>
    </div>
</template>

<script setup>

import { ref, computed, onMounted } from "vue";
import { auth, db } from "@/firebase/init.js";
import { onAuthStateChanged } from "firebase/auth";
import { cartStore } from "@/stores/cartstore";
import { productStore } from "@/stores/productstore";

const myCartStore = cartStore();
const myProductStore = productStore();

const user = ref(null);
const currentCartList = ref([]);
const tempCartList = ref([]);


onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            user.value = currentUser;
            myCartStore.fetchCartItems(currentUser);
        } else {
            user.value = null;
            currentCartList.value = [];
        }
    });
});

const addToCart = async (user, currentPriceId) => {
    await myCartStore.addToCart(user, currentPriceId);
}

const decreaseQuantity = async (user, currentPriceId) => {
    await myCartStore.decreaseQuantity(user, currentPriceId);
}

const removeItemFromCart = async (user, currentPriceId) => {
    await myCartStore.removeItemFromCart(user, currentPriceId);
}

const clearCart = async (user) => {
    await myCartStore.clearCart(user);
}

const getItemCount = computed(() => {
    return myCartStore.getCartCount;
})

const getCartList = computed(() => {
    getCurrentCartList();
    return tempCartList.value;
})

const priceFormatter = (price) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        price,
    );
}

const getCurrentCartList = () => {
    // get cart items and the filter products
    const cartItemsResult = myCartStore.getCartList();
    const products = myProductStore.retrieveProductList();

    let cartArray = [];
    let currentProducts = [];
    products.then((productRes) => {
        currentProducts = productRes;
        cartItemsResult.forEach((el) => {
            let cartItemInfo = currentProducts.find(prod => prod.priceId == el.priceId);
            el['name'] = cartItemInfo.name;
            el['unit_price'] = (cartItemInfo.priceInfo.unit_amount) / 100;
            cartArray.push(el);
        })
        tempCartList.value = cartArray;
        //console.log(tempCartList.value);
    })
}

function computeItemSubTotal(priceId) {
    let cartItemInfo = tempCartList.value.find(prod => prod.priceId == priceId);
    return cartItemInfo.quantity * cartItemInfo.unit_price;
};

function getItemSubTotal(priceId) {
    let cartItemSubTotal = computeItemSubTotal(priceId);
    return priceFormatter(cartItemSubTotal);
};

const computeTotalItemsPrice = () => {
    return tempCartList.value.reduce((total, item) => total + item.unit_price * item.quantity, 0);
}

const getTotalItemsPrice = computed(() => {
    let totalItemsPrice = computeTotalItemsPrice();
    return priceFormatter(totalItemsPrice);
})


function computeTotalDiscout() {
    let discountPercentage = 0.10;
    let itemsSubtotal = tempCartList.value.reduce((total, item) => total + item.unit_price * item.quantity, 0);
    return itemsSubtotal * discountPercentage;
}

function getTotalDiscout() {
    let itemsDiscount = computeTotalDiscout();
    return priceFormatter(itemsDiscount);
}

function computeValueAddedTax() {
    let taxRatio = 0.16;
    let itemsSubtotal = tempCartList.value.reduce((total, item) => total + item.unit_price * item.quantity, 0);
    return itemsSubtotal * taxRatio;
}

function getValueAddedTax() {
    let itemsTaxTotal = computeValueAddedTax();
    return priceFormatter(itemsTaxTotal);
}

function computeShippingCost() {
    let shippingCost = 10;
    return shippingCost;
}

function getShippingCost() {
    let shippingCost = computeShippingCost();
    return priceFormatter(shippingCost);
}

function computeTotalSum() {
    let itemsSubtotal = tempCartList.value.reduce((total, item) => total + item.unit_price * item.quantity, 0);
    return itemsSubtotal + computeShippingCost() + computeValueAddedTax() - computeTotalDiscout();
}

const getTotalSum = computed(() => {
    let itemTotal = computeTotalSum();
    return priceFormatter(itemTotal);
})

async function executeCheckout(user) {
    await myCartStore.executeCheckout(user);
}

</script>

<style></style>
<template>
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

                            <v-btn icon="mdi-plus" @click="addToCart(user, cartItem.priceId)" size="xx-small"></v-btn>

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
            <v-btn append-icon="mdi-chevron-right" @click="executeCheckout(user)" color="red-lighten-2" text="Checkout"
                variant="outlined" block>
            </v-btn>
        </template>

    </v-card>
</template>

<script setup lang="ts">
defineProps<{
    clearCart: (user: any) => Promise<void>;
    user: any;
    getCartList: any[];
    priceFormatter: (price: any) => string;
    decreaseQuantity: (user: any, currentPriceId: any) => Promise<void>;
    addToCart: (user: any, currentPriceId: any) => Promise<void>;
    getItemSubTotal: (priceId: any) => string;
    removeItemFromCart: (user: any, currentPriceId: any) => Promise<void>;
    getTotalItemsPrice: string;
    getTotalDiscout: () => string;
    getShippingCost: () => string;
    getValueAddedTax: () => string;
    getItemCount: number;
    getTotalSum: string;
    executeCheckout: (user: any) => Promise<void>;
}>()
</script>

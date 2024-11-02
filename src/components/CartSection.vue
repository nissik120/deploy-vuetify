<template>
    <v-card class="mx-auto" prepend-icon="$vuetify">
        <template v-slot:title>
            <span class="font-weight-black">Shopping Cart</span>
        </template>

        <v-list-item class="w-100" v-for="i in 3">
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
                            <h4 class="mb-1">The organic cotton chunky beanie</h4>
                            <p class="grey--text mb-0">$10.00</p>
                        </v-col>

                        <!-- Quantity Controls + Item Total -->
                        <v-col cols="12" class="d-flex align-center justify-end">

                            <v-btn icon="mdi-minus" @click="decreaseQuantity" size="xx-small"></v-btn>

                            <span class="mx-2">4</span>

                            <v-btn icon="mdi-plus" @click="increaseQuantity" size="xx-small"></v-btn>

                            <div class="mx-4">
                                <span>€ 40000.00</span>
                            </div>

                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
            <v-divider></v-divider>
        </v-list-item>
    </v-card>


    <v-card class="my-2 mx-auto">

        <v-list-item>
            <template v-slot:title>
                <span>Subtotal</span>
            </template>
            <template v-slot:append>
                <span>€ 200.00</span>
            </template>
        </v-list-item>

        <v-list-item>
            <template v-slot:title>
                <span>Discount</span>
            </template>
            <template v-slot:append>
                <span>- € 10.00</span>
            </template>
        </v-list-item>

        <v-list-item>
            <template v-slot:title>
                <span>Shipping & Handling</span>
            </template>
            <template v-slot:append>
                <span>€ 10.00</span>
            </template>
        </v-list-item>

        <v-list-item>
            <template v-slot:title>
                <span>Tax</span>
            </template>
            <template v-slot:append>
                <span>€ 10.00</span>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
            <template v-slot:title>
                <span class="font-weight-black">Subtotal</span> (2 Items)
            </template>
            <template v-slot:append>
                <span class="font-weight-black">€ 210.00</span>
            </template>
        </v-list-item>

        <template v-slot:actions>
            <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Checkout" variant="outlined"
                block></v-btn>
        </template>

    </v-card>

</template>

<script setup>

</script>

<style lang="scss" scoped></style>
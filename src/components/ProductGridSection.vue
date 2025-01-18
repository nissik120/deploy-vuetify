<template>
    <div>
        <v-img src="../assets/boutique-banner-b.png" height="100" cover></v-img>
    </div>

    <v-layout>

        <v-navigation-drawer floating v-model="sidebarFilter" mobile-breakpoint="md">
            <v-list-item link title="List Item 1"></v-list-item>
            <v-list-item link title="List Item 2"></v-list-item>
            <v-list-item link title="List Item 3"></v-list-item>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="d-flex flex-row ma-2 align-center">
                            <v-btn class="mr-2 hidden-md-and-up" @click.stop="sidebarFilter = !sidebarFilter">
                                <v-icon icon="mdi-filter-menu"></v-icon>
                            </v-btn>

                            <v-text-field density="compact" label="Search" prepend-inner-icon="mdi-magnify"
                                variant="solo-filled" flat hide-details single-line v-model="searchString"
                                @update:model-value="getProducts"></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-chip-group class="ma-2" column multiple>
                            <v-chip text="New" variant="outlined" filter></v-chip>

                            <v-chip text="Hosen" variant="outlined" filter></v-chip>

                            <v-chip text="Hemden" variant="outlined" filter></v-chip>

                            <v-chip text="Blusen" variant="outlined" filter></v-chip>

                            <v-chip text="Socken" variant="outlined" filter></v-chip>

                            <v-chip text="Zübehor" variant="outlined" filter></v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-container>

            <v-container>

                <v-row>
                    <v-col cols="12" sm="3">
                        <v-text-field :model-value="paginationData.itemsPerPage" class="pa-2" label="Items per page"
                            max="15" min="1" type="number" hide-details
                            @update:model-value="paginationData.itemsPerPage = parseInt($event, 10)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-pagination cols="7" v-model="paginationData.page"
                            :length="Math.ceil(itemListCount / paginationData.itemsPerPage)"></v-pagination>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="item in itemList">
                        <ProductItemCard :productItem="item" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="3">
                        <v-text-field :model-value="paginationData.itemsPerPage" class="pa-2" label="Items per page"
                            max="15" min="1" type="number" hide-details
                            @update:model-value="paginationData.itemsPerPage = parseInt($event, 10)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-pagination cols="7" v-model="paginationData.page"
                            :length="Math.ceil(itemListCount / paginationData.itemsPerPage)"></v-pagination>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script setup>
import { ref, toRaw, reactive, computed } from 'vue';
import { productStore } from '@/stores/productstore';
import { auth, db } from "@/firebase/init"
import { query, doc, where, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, collection } from "firebase/firestore"
import { cartStore } from '@/stores/cartstore';

const productData = ref([]);
const sidebarFilter = ref(false);
const searchString = ref("");
const displayProductData = ref([]);
const newProductData = ref([]);

const myProductStore = productStore();
const myCartStore = cartStore();

const paginationData = reactive({
    itemsPerPage: 10,
    page: 1
});

const itemListCount = computed(() => displayProductData.value.length);

const itemList = computed(() => {
    const start = (paginationData.page - 1) * paginationData.itemsPerPage;
    const end = start + (paginationData.itemsPerPage);
    return displayProductData.value.slice(start, end);
})

const getProducts = computed(() => {
    const products = myProductStore.retrieveProductList();
    products.then((res) => {
        productData.value = res;
    })

    if (searchString.value != "" && searchString.value != null) {
        displayProductData.value = productData.value.filter((item) => (item.name).toLowerCase().includes(searchString.value.toLowerCase()));
    } else {
        displayProductData.value = productData.value;
    }
});

</script>

<style lang="scss" scoped></style>
<template>
    <div>
        <v-img height="200px" :src="`https://picsum.photos/id/78/1200/1800`" cover></v-img>
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
                        <v-card color="surface-variant" min-width="240" max-width="340">
                            <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                cover></v-img>
                            <v-card-title>
                                {{ item.name }}
                            </v-card-title>
                            <v-card-subtitle>
                                €{{ item.price }}
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn text="Add To Cart"></v-btn>
                            </v-card-actions>
                        </v-card>
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
import { ref, reactive, computed } from 'vue';
const sidebarFilter = ref(false);
const searchString = ref("");
const displayProductData = ref([]);

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
    if (searchString.value != "" && searchString.value != null) {
        displayProductData.value = productData.value.filter((item) => (item.name).toLowerCase().includes(searchString.value.toLowerCase()));
        console.log(displayProductData.value.length);
    } else {
        displayProductData.value = productData.value;
    }
});

const productData = ref([
    {
        "id": "P001",
        "name": "Classic White T-Shirt",
        "category": "Tops",
        "price": 19.99,
        "size": ["S", "M", "L", "XL"],
        "color": ["White"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/white_tshirt_front.jpg",
                "alt": "Classic white t-shirt front view"
            },
            {
                "url": "https://example.com/images/white_tshirt_back.jpg",
                "alt": "Classic white t-shirt back view"
            }
        ],
        "description": "A classic white cotton t-shirt for everyday wear."
    },
    {
        "id": "P002",
        "name": "Blue Denim Jeans",
        "category": "Bottoms",
        "price": 49.99,
        "size": ["28", "30", "32", "34", "36"],
        "color": ["Blue"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/blue_denim_jeans_front.jpg",
                "alt": "Blue denim jeans front view"
            },
            {
                "url": "https://example.com/images/blue_denim_jeans_back.jpg",
                "alt": "Blue denim jeans back view"
            }
        ],
        "description": "Comfortable blue denim jeans with a slim fit design."
    },
    {
        "id": "P003",
        "name": "Red Cotton Hoodie",
        "category": "Outerwear",
        "price": 34.99,
        "size": ["S", "M", "L", "XL"],
        "color": ["Red", "Black"],
        "inStock": false,
        "images": [
            {
                "url": "https://example.com/images/red_cotton_hoodie_front.jpg",
                "alt": "Red cotton hoodie front view"
            },
            {
                "url": "https://example.com/images/red_cotton_hoodie_back.jpg",
                "alt": "Red cotton hoodie back view"
            }
        ],
        "description": "A cozy red hoodie made from soft cotton."
    },
    {
        "id": "P004",
        "name": "Leather Jacket",
        "category": "Outerwear",
        "price": 120.00,
        "size": ["M", "L", "XL"],
        "color": ["Black"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/leather_jacket_front.jpg",
                "alt": "Black leather jacket front view"
            },
            {
                "url": "https://example.com/images/leather_jacket_back.jpg",
                "alt": "Black leather jacket back view"
            }
        ],
        "description": "A stylish black leather jacket for a modern look."
    },
    {
        "id": "P005",
        "name": "Floral Summer Dress",
        "category": "Dresses",
        "price": 29.99,
        "size": ["S", "M", "L"],
        "color": ["Floral"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/floral_summer_dress_front.jpg",
                "alt": "Floral summer dress front view"
            },
            {
                "url": "https://example.com/images/floral_summer_dress_back.jpg",
                "alt": "Floral summer dress back view"
            }
        ],
        "description": "A lightweight summer dress with a floral print."
    },
    {
        "id": "P006",
        "name": "Black Running Shoes",
        "category": "Shoes",
        "price": 79.99,
        "size": ["8", "9", "10", "11", "12"],
        "color": ["Black"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/black_running_shoes.jpg",
                "alt": "Black running shoes"
            }
        ],
        "description": "Durable black running shoes with excellent grip."
    },
    {
        "id": "P007",
        "name": "Blue Cotton Polo Shirt",
        "category": "Tops",
        "price": 25.00,
        "size": ["M", "L", "XL"],
        "color": ["Blue"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/blue_polo_front.jpg",
                "alt": "Blue cotton polo shirt front view"
            }
        ],
        "description": "A casual blue polo shirt, perfect for everyday wear."
    },
    {
        "id": "P008",
        "name": "Green Chinos",
        "category": "Bottoms",
        "price": 44.99,
        "size": ["30", "32", "34", "36"],
        "color": ["Green"],
        "inStock": false,
        "images": [
            {
                "url": "https://example.com/images/green_chinos_front.jpg",
                "alt": "Green chinos front view"
            },
            {
                "url": "https://example.com/images/green_chinos_back.jpg",
                "alt": "Green chinos back view"
            }
        ],
        "description": "Comfortable slim-fit chinos in olive green."
    },
    {
        "id": "P009",
        "name": "Black Leather Belt",
        "category": "Accessories",
        "price": 29.99,
        "size": ["S", "M", "L", "XL"],
        "color": ["Black"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/black_leather_belt.jpg",
                "alt": "Black leather belt"
            }
        ],
        "description": "A durable black leather belt with a classic buckle."
    },
    {
        "id": "P010",
        "name": "Woolen Scarf",
        "category": "Accessories",
        "price": 19.99,
        "size": ["One Size"],
        "color": ["Gray", "Red"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/woolen_scarf.jpg",
                "alt": "Gray woolen scarf"
            }
        ],
        "description": "A warm and soft woolen scarf for cold weather."
    },
    {
        "id": "P011",
        "name": "White Sneakers",
        "category": "Shoes",
        "price": 65.00,
        "size": ["7", "8", "9", "10"],
        "color": ["White"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/white_sneakers.jpg",
                "alt": "White sneakers"
            }
        ],
        "description": "Classic white sneakers with a minimalist design."
    },
    {
        "id": "P012",
        "name": "Striped Linen Shirt",
        "category": "Tops",
        "price": 39.99,
        "size": ["S", "M", "L", "XL"],
        "color": ["Blue and White"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/striped_linen_shirt.jpg",
                "alt": "Striped blue and white linen shirt"
            }
        ],
        "description": "A lightweight, breathable striped linen shirt."
    },
    {
        "id": "P013",
        "name": "Red Midi Skirt",
        "category": "Skirts",
        "price": 45.99,
        "size": ["S", "M", "L"],
        "color": ["Red"],
        "inStock": false,
        "images": [
            {
                "url": "https://example.com/images/red_midi_skirt.jpg",
                "alt": "Red midi skirt"
            }
        ],
        "description": "A stylish red midi skirt perfect for casual outings."
    },
    {
        "id": "P014",
        "name": "Navy Blazer",
        "category": "Outerwear",
        "price": 89.99,
        "size": ["M", "L", "XL"],
        "color": ["Navy"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/navy_blazer.jpg",
                "alt": "Navy blazer front view"
            }
        ],
        "description": "A tailored navy blazer for formal occasions."
    },
    {
        "id": "P015",
        "name": "Leather Ankle Boots",
        "category": "Shoes",
        "price": 99.99,
        "size": ["8", "9", "10", "11"],
        "color": ["Brown"],
        "inStock": true,
        "images": [
            {
                "url": "https://example.com/images/leather_ankle_boots.jpg",
                "alt": "Brown leather ankle boots"
            }
        ],
        "description": "Stylish leather ankle boots for casual wear."
    }
]);

</script>

<style lang="scss" scoped></style>
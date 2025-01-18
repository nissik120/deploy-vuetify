import { auth, db } from "@/firebase/init"
import { query, doc, where, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, collection } from "firebase/firestore"
import { defineStore } from "pinia"
import { ref } from "vue"

export const productStore = defineStore("product", ()=>{

    const productList = ref([])
    const focusProduct = ref({})

    async function retrieveProductList() {
        // Query active products
        const q = query(collection(db, 'products'), where('active', '==', true));
        const querySnapshot = await getDocs(q);

        // Fetch products and their price info
        const products = await Promise.all(
            querySnapshot.docs.map(async (productDoc) => {
                const productInfo = productDoc.data();
                const pricesCollection = collection(productDoc.ref, 'prices');
                const [priceDoc] = (await getDocs(pricesCollection)).docs;

                if (priceDoc) {
                    productInfo.priceId = priceDoc.id;
                    productInfo.priceInfo = priceDoc.data();
                }

                return productInfo;
            })
        );

        return products;
    }


    async function retrieveProductList2() {
        newProductData.value = [];

        const q = query(
            collection(db, 'products'),
            where('active', '==', true)
        );

        const productsPromises = getDocs(q).then(function (querySnapshot) {
            querySnapshot.forEach(async function (productDoc) {
                //console.log(productDoc.id, ' => ', productDoc.data());
                let productInfo = productDoc.data();
                const priceSnap = await getDocs(collection(productDoc.ref, 'prices'));

                priceSnap.forEach((priceDoc) => {
                    //console.log(priceDoc.id, ' => ', priceDoc.data());
                    productInfo['priceId'] = priceDoc.id;
                    productInfo['priceInfo'] = priceDoc.data();
                });
                //console.log(productInfo);

                newProductData.value.push(productInfo);

                return productInfo;
            });
        });

        return productsPromises;
    }    

    const productData2 = ref(
    [
        {
            "role": null,
            "description": "Plain white t-shirt, perfect for custom printing.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/white_tshirt_front.jpg"
            ],
            "active": true,
            "name": "White Tee",
            "priceId": "price_1QO8lhFhIvatMWOAwhite",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 150,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_whiteRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Soft black t-shirt, ideal for everyday wear.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/black_tshirt_front.jpg"
            ],
            "active": true,
            "name": "Black Tee",
            "priceId": "price_1QO8lhFhIvatMWOAblack",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 160,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_blackRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Comfortable gray hoodie, perfect for colder weather.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/gray_hoodie.jpg"
            ],
            "active": true,
            "name": "Gray Hoodie",
            "priceId": "price_1QO8lhFhIvatMWOAgrayhoodie",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 300,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_grayhoodieRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Classic blue denim jacket with a vintage look.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/denim_jacket.jpg"
            ],
            "active": true,
            "name": "Denim Jacket",
            "priceId": "price_1QO8lhFhIvatMWOAdenim",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 450,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_denimRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Lightweight beige chino pants, perfect for casual or formal occasions.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/beige_chinos.jpg"
            ],
            "active": true,
            "name": "Beige Chinos",
            "priceId": "price_1QO8lhFhIvatMWOAbeigechinos",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 350,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_beigechinosRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Stylish leather jacket with a slim fit design.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/leather_jacket.jpg"
            ],
            "active": true,
            "name": "Leather Jacket",
            "priceId": "price_1QO8lhFhIvatMWOAjacket",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 700,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_leatherjacketRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Relaxed-fit sweatpants, perfect for lounging or exercising.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/sweatpants.jpg"
            ],
            "active": true,
            "name": "Sweatpants",
            "priceId": "price_1QO8lhFhIvatMWOAsweatpants",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 250,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_sweatpantsRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Premium flannel shirt with a red and black plaid pattern.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/plaid_flannel.jpg"
            ],
            "active": true,
            "name": "Plaid Flannel",
            "priceId": "price_1QO8lhFhIvatMWOAflannel",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 200,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_flannelRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Elegant blue dress shirt, perfect for office wear.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/blue_shirt.jpg"
            ],
            "active": true,
            "name": "Blue Shirt",
            "priceId": "price_1QO8lhFhIvatMWOAblueshirt",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 220,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_blueshirtRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        },
        {
            "role": null,
            "description": "Comfortable and breathable running shorts.",
            "metadata": {},
            "tax_code": null,
            "images": [
                "https://example.com/images/running_shorts.jpg"
            ],
            "active": true,
            "name": "Running Shorts",
            "priceId": "price_1QO8lhFhIvatMWOArunshorts",
            "priceInfo": {
                "transform_quantity": null,
                "unit_amount": 180,
                "tiers_mode": null,
                "type": "one_time",
                "tiers": null,
                "interval": null,
                "currency": "eur",
                "metadata": {},
                "product": "prod_runshortsRGg7NJ168YVoos",
                "tax_behavior": "unspecified",
                "trial_period_days": null,
                "interval_count": null,
                "billing_scheme": "per_unit",
                "description": null,
                "recurring": null,
                "active": true
            }
        }
    ]);

    const productData3 = ref([
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

    return {productList, focusProduct, retrieveProductList}

})
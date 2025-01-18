import { defineStore } from "pinia";
import { auth, db } from "@/firebase/init";
import { doc, updateDoc, getDoc, setDoc, arrayUnion, onSnapshot, collection, addDoc } from "firebase/firestore";
import { ref, computed } from "vue";

export const cartStore = defineStore("cart", () => {

    const cartList = ref([])

    const STRIPE_PUB_KEY = ref("pk_test_51QEoH0FhIvatMWOAA0sn38wBBM1zfeqURVrvvyVkH1PLaRI40K9HtaEwKQYrIbi0nM1m5t42FGjJ9fRsx6tGvick00hdLs1UU8")


    let getCartCount = computed(()=> {
        return cartList.value.length;
    })

    let getCartList = () => {
        return cartList.value;
    }

    const fetchCartItems = async (user) => {
        if (!user) return;

        let dateID = new Date().toISOString().split('T')[0];
        const cartRef = doc(db, `customers/${user.uid}/cart`, dateID);
        const currentDoc = await getDoc(cartRef);
        if (currentDoc.exists()) {
            cartList.value = currentDoc.data().items || [];
        }
    }

    async function addToCart(user, currentPriceId) {

        if (!user) {
            alert("You must be logged in to add items to your cart.");
            return;
        }

        let dateID = new Date().toISOString().split('T')[0];
        const cartRef = doc(db, `customers/${user.uid}/cart`, dateID);
        const currentDoc = await getDoc(cartRef);

        if (currentDoc.exists()) {
            const currentItems = currentDoc.data().items || [];
            const existingItemIndex = currentItems.findIndex((item) => item.priceId === currentPriceId);

            if (existingItemIndex !== -1) {
                currentItems[existingItemIndex].quantity = currentItems[existingItemIndex].quantity + 1;
            } else {
                let defaultItem = {
                    "priceId": currentPriceId,
                    "quantity": 1
                };
                currentItems.push(defaultItem);
            }
            await updateDoc(cartRef, { items: currentItems });

            console.log("added new entry");

        } else {
            await setDoc(cartRef, {
                items: arrayUnion({
                    "priceId": currentPriceId,
                    "quantity": 1
                })
            });
            console.log("added first entry");
        }

        await fetchCartItems(user);

    }

    const decreaseQuantity = async (user, currentPriceId) => {
        if (!user) return;

        let dateID = new Date().toISOString().split('T')[0];
        const cartRef = doc(db, `customers/${user.uid}/cart`, dateID);
        const currentDoc = await getDoc(cartRef);

        if (currentDoc.exists()) {

            const currentItems = currentDoc.data().items || [];
            const existingItemIndex = currentItems.findIndex((item) => item.priceId === currentPriceId);

            if (existingItemIndex !== -1) {
                if (currentItems[existingItemIndex].quantity > 1) {
                    currentItems[existingItemIndex].quantity = currentItems[existingItemIndex].quantity - 1;
                } else {
                    currentItems.splice(existingItemIndex, 1);
                }
                await updateDoc(cartRef, { items: currentItems });
            }

        }
        await fetchCartItems(user);
        console.log("removed a quantity under name from cart");

    }

    const removeItemFromCart = async (user, currentPriceId) => {
        if (!user) return;

        let dateID = new Date().toISOString().split('T')[0]; //"2025-01-03"

        const cartRef = doc(db, `customers/${user.uid}/cart`, dateID);
        const currentDoc = await getDoc(cartRef);

        if (currentDoc.exists()) {

            const currentItems = currentDoc.data().items || [];
            const existingItemIndex = currentItems.findIndex((item) => item.priceId === currentPriceId);

            if (existingItemIndex !== -1) {
                currentItems.splice(existingItemIndex, 1);
                await updateDoc(cartRef, { items: currentItems });
            }
        }
        await fetchCartItems(user);
        console.log("removed item under name from cart");
    }


    const clearCart = async (user) => {
        if (!user) return;

        let dateID = new Date().toISOString().split('T')[0];
        const cartRef = doc(db, `customers/${user.uid}/cart`, dateID);
        const currentDoc = await getDoc(cartRef);
        if (currentDoc.exists()) {
            await updateDoc(cartRef, { items: [] });
        }
        await fetchCartItems(user);
    }


    async function executeCheckout(user) {

        if (!user) return;

        const checkOutRef = collection(db, `customers/${user.uid}/checkout_sessions`);

        let cartSectioned = cartList.value.map((item) => ({
            price: item.priceId,
            quantity: item.quantity
        }))

        console.log(cartSectioned);

        let checkoutSessionData = {
            mode: 'payment',
            success_url: window.location.origin +'/deploy-vuetify/success', // can set this to a custom page
            cancel_url: window.location.origin +'/deploy-vuetify/cancel',   // can set this to a custom page
            line_items: cartSectioned
        }

        const checkoutSessionRef = await addDoc(checkOutRef, checkoutSessionData);

        // The Stripe extension creates a payment link for us
        onSnapshot(checkoutSessionRef, async (snap) => {
            const { error, url } = snap.data();
            if (error) {
                console.log(error);
            }
            if (url) {
                window.location.assign(url);
            }
        });


    }

    return {getCartCount, getCartList, addToCart, fetchCartItems, removeItemFromCart, decreaseQuantity, clearCart, executeCheckout}

})
<template>

    <v-card v-if="!isUserLoggedIn && isRegisterView" prepend-icon="mdi-account" title="Register Account">
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" variant="plain" @click="dialogStore.closeDialog"></v-btn>
        </v-card-actions>

        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-text-field label="First name(s)*" v-model="currentUserDetails.firstName" required></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field label="Last name*" v-model="currentUserDetails.lastName" persistent-hint
                        required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Email*" v-model="currentUserDetails.email" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Password*" type="password" v-model="currentUserDetails.password"
                        required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Confirm Password*" type="password" v-model="passwordRetype"
                        required></v-text-field>
                </v-col>

                <div>
                    <v-btn variant="text" @click="isRegisterView = !isRegisterView">
                        Already have an account?
                    </v-btn>
                </div>
            </v-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>

            <div>
                <v-btn class="mb-8" color="blue" size="large" variant="tonal" @click="executeUserRegistration" block>
                    Sign Up
                </v-btn>
            </div>

        </v-card-text>
    </v-card>

    <v-card v-else-if="!isUserLoggedIn && !isRegisterView" prepend-icon="mdi-account" title="Log In" class="pa-4 pb-8"
        elevation="8" rounded="lg">

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" variant="plain" @click="dialogStore.closeDialog"></v-btn>
        </v-card-actions>

        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
            variant="outlined" v-model="currentUserDetails.email"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password

            <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank"
                @click.prevent="executeUserResetPassword">
                Forgot login password?</a>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible" v-model="currentUserDetails.password"></v-text-field>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="executeUserLogin">
            Log In
        </v-btn>

        <v-card-text class="text-center">
            <v-btn variant="plain" @click="isRegisterView = !isRegisterView">
                Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </v-btn>
        </v-card-text>
    </v-card>

    <v-card v-else prepend-icon="mdi-logout" text="Are you sure you would like to sign out?" title="Sign Out">
        <template v-slot:actions>
            <v-spacer></v-spacer>

            <v-btn @click="dialogStore.closeDialog">
                No
            </v-btn>

            <v-btn @click.prevent="executeUserLogout">
                Yes
            </v-btn>
        </template>
    </v-card>
</template>

<script setup>

import { computed, ref } from 'vue'
import { userAuthStore } from '@/stores/authstore'
import { appDialogStore } from "@/stores/dialogstore"
import { auth } from "@/firebase/init.js"
import { onAuthStateChanged } from 'firebase/auth'

const dialogStore = appDialogStore()

const authStore = userAuthStore()

const visible = ref(false)


onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            authStore.setUser(currentUser)
        } else {
            authStore.setUser(null)
        }
    })
})

const isUserLoggedIn = computed(() => {
    return authStore.user !== null
})
const isRegisterView = ref(false)
const passwordRetype = ref('')

const currentUserDetails = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
})

const userDetails = ref({
    name: "Joan Peters",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg"
})

const getAuthButtonText = computed(() => {
    //return isUserLoggedIn.value ? 'Logout' : 'Sign In'
    //return authStore.user.value == null ? 'Logout' : 'Sign In'
    return authStore.user

})

function executeUserLogout() {
    authStore.logOutUser()
    authStore.setUser(null)
    localStorage.removeItem('app_user')
    dialogStore.closeDialog()
}


async function executeUserLogin() {
    let email = currentUserDetails.value.email
    let password = currentUserDetails.value.password
    await authStore.signInUser(email, password)
    dialogStore.closeDialog()
}

function executeUserRegistration() {
    let email = currentUserDetails.value.email
    let password = currentUserDetails.value.password
    if (password === passwordRetype.value) {
        authStore.signUpUser(email, password)
        dialogStore.closeDialog()
    } else {
        console.log('Password not the same')
    }
}

function executeUserResetPassword() {
    console.log("Clicked reset password")
    /*
        if (currentUserDetails.value.email != null || currentUserDetails.value.email.length != 0) {
            authStore.resetUserPassword(currentUserDetails.value.email)
        }
    */
    dialogStore.closeDialog()
}


</script>

<style lang="scss" scoped></style>
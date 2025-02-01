<template>
    <v-container class="text-center">
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card elevation="3" class="pa-8">
                    <v-icon size="64" color="red">mdi-account-question-outline</v-icon>
                    <h2 class="mt-4">Not Authenticated</h2>
                    <p class="mt-2">
                        Please log in to access your cart....
                    </p>
                    <v-btn color="primary" class="mt-4" @click="dialogStore.openDialog(1)">Sign In</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { appDialogStore } from "@/stores/dialogstore"

const dialogStore = appDialogStore()

</script>

<style lang="scss" scoped></style>
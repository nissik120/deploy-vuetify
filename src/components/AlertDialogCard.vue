<template>
    <v-card>
        <v-card-title class="text-h6">Are you sure?</v-card-title>

        <v-card-text>
            This action cannot be undone. Please confirm if you want to proceed.
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <!-- Cancel Button -->
            <v-btn text color="error" @click="dialogStore.closeDialog">Cancel</v-btn>
            <!-- Confirm Button -->
            <v-btn text color="primary" @click="confirmAction">Confirm</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { appDialogStore } from "@/stores/dialogstore"

const dialogStore = appDialogStore()
</script>

<style lang="scss" scoped></style>
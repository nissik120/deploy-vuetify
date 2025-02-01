<template>
    <div class="text-center pa-4">
        <v-dialog v-model="dialogStore.showDialog" max-width="400px">
            <AuthModalView v-if="dialogStore.getDialogType() == 1" />
            <AlertDialogCard v-else />
        </v-dialog>
    </div>

</template>

<script setup>

import { appDialogStore } from "@/stores/dialogstore"

const dialogStore = appDialogStore()


</script>

<style lang="scss" scoped></style>
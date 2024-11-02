<template>
  <v-footer class="bg-grey-lighten-1 py-8" app>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" class="mx-2" color="white" rounded="xl" variant="text">
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        &copy; {{ new Date().getFullYear() }} <strong>E'S Fashion</strong> — All Rights Reserved
      </v-col>
    </v-row>
  </v-footer>
</template>


<script setup>
import { ref } from 'vue'
const links = ref([
  'Suchen',
  'Impressum',
  'Datenschutzerklärung',
  'Widerrufsbelehrung',
  'AGB',
])
</script>

<style scoped lang="sass">
</style>

<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="10">
        <h1 class="text-h4 text-center">Finde Neuheiten, Style-Inspirationen und Sales</h1>
        <h4 class="subheading text-center">in unserem Newsletter.</h4>
        <v-text-field class="pa-2 ma-2" label="Your email" type="text" variant="outlined">
          <template v-slot:append>
            <v-btn text="Submit" type="submit"></v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

// TODO: Add the an email validator

// TODO: Add newsletter message subscription message

</script>
<template>
    <AppNav />
    <TwoImageHero />

    <v-container class="bg-grey-lighten-1 py-8">
        <h2>Unser Dienste</h2>
        <v-row>
            <v-col>
                <v-card max-width="344" subtitle="This is a card subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
                    title="This is a title" :prepend-icon="'mdi-information-outline'">
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <h2>Unser Angebote</h2>
        <p>Buchen Jetzt</p>
        <v-row>
            <v-col>
                <v-card :variant="variant" color="surface-variant" max-width="344">
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
                    <v-card-title>
                        Headline
                    </v-card-title>
                    <v-card-subtitle>
                        Greyhound divisely hello coldly fonwderfully
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn text="Button"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>
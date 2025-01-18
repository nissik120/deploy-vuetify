<template>
    <AppNav />
    <v-container class="about-page">
        <!-- Introduction Section -->
        <v-row class="my-5">
            <v-col cols="12" md="6">
                <v-img src="https://picsum.photos/600/400" alt="Tailor working" height="100%" class="rounded"></v-img>
            </v-col>
            <v-col cols="12" md="6">
                <h1 class="text-h3 font-weight-bold">About Us</h1>
                <p class="text-body-1 mt-4">
                    Welcome to E'S Fashion, where passion for fashion meets the art of tailoring. With over 10
                    years of experience, we specialize in creating unique, high-quality garments that celebrate
                    individual style and elegance.
                </p>
            </v-col>
        </v-row>

        <!-- History Section -->
        <v-row class="my-5">
            <v-col cols="12" md="6">
                <h2 class="text-h4 font-weight-bold">Our Journey</h2>
                <p class="text-body-1 mt-4">
                    Founded in 2014, E'S Fashion began with a mission to bring bespoke fashion to the
                    community. From custom suits and dresses to everyday alterations, we have built a reputation for
                    craftsmanship and attention to detail.
                </p>
            </v-col>
            <v-col cols="12" md="6">
                <v-img src="https://picsum.photos/601/400" alt="Tailoring studio" height="100%" class="rounded"></v-img>
            </v-col>
        </v-row>

        <!-- Services Section -->
        <v-row class="my-5">
            <v-col cols="12" class="text-center">
                <h2 class="text-h4 font-weight-bold">Our Services</h2>
                <p class="text-body-1 mt-4">
                    At E'S Fashion, we offer a range of tailoring and fashion services to suit every need:
                </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <v-icon size="48" color="primary">mdi-scissors-cutting</v-icon>
                <h3 class="text-h6 font-weight-bold mt-2">Custom Tailoring</h3>
                <p class="text-body-2">
                    Bespoke suits, dresses, and outfits crafted to your measurements and preferences.
                </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <v-icon size="48" color="primary">mdi-hanger</v-icon>
                <h3 class="text-h6 font-weight-bold mt-2">Alterations</h3>
                <p class="text-body-2">
                    Perfect fits for any garment, ensuring comfort and style every time you wear it.
                </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <v-icon size="48" color="primary">mdi-tshirt-crew</v-icon>
                <h3 class="text-h6 font-weight-bold mt-2">Personal Styling</h3>
                <p class="text-body-2">
                    Style consultations to help you create looks that enhance your unique style.
                </p>
            </v-col>
        </v-row>

    </v-container>

</template>

<style scoped>
.about-page {
    max-width: 800px;
    margin: 0 auto;
}
</style>

<script setup>

</script>
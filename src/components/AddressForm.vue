<template>
    <v-container class="bg-grey-lighten-1 py-8">

        <h2 class="ml-2 pa-2">Unser Laden</h2>

        <v-row>
            <v-col cols="12" sm="6">

                <h3 class="pa-2 ml-2">Addresse und Arbeitzeit</h3>

                <div class="d-flex flex-row">
                    <p class="ma-2 pa-2">Addresse</p>
                    <p class="ma-2 pa-2">
                        Alte Linner Str. 103 <br>
                        47799 Krefeld
                    </p>
                </div>

                <div class="d-flex flex-row">
                    <p class="ma-2 pa-2">Arbeitzeit</p>
                    <p class="ma-2 pa-2">
                        Mo-Sa 10.00 - 15.00 Uhr<br>
                        Sonntag - Geschlossen <br>
                        info@esfashion.de <br>
                        +49 (0)1520 883 7951
                    </p>
                </div>

            </v-col>
            <v-form cols="12" sm="6">
                <v-container>
                    <h3 class="py-2">Kontakt Uns</h3>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="First name" hide-details required variant="solo"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field label="Last name" hide-details required variant="solo"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field label="E-mail" hide-details required variant="solo"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-btn color="secondary" class="mt-2" type="submit" block>Senden</v-btn>
                        </v-col>

                    </v-row>
                </v-container>
            </v-form>
        </v-row>
    </v-container>
</template>

<script setup>

</script>
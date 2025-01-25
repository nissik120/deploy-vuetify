<template>

    <v-container>
        <v-card class="pa-4">
            <h2>Set Business Hours</h2>
            <v-row justify="space-around">
                <v-col cols="11" sm="5">
                    <v-text-field v-model="startTime" :active="menu2" :focus="menu2" label="Start Time"
                        prepend-icon="mdi-clock-time-four-outline" readonly>
                        <v-menu v-model="menu2" :close-on-content-click="false" activator="parent"
                            transition="scale-transition">
                            <v-time-picker v-if="menu2" v-model="startTime" full-width></v-time-picker>
                        </v-menu>
                    </v-text-field>
                </v-col>

                <v-col cols="11" sm="5">
                    <v-text-field v-model="endTime" :active="modal2" :focused="modal2" label="Closing Time"
                        prepend-icon="mdi-clock-time-four-outline" readonly>
                        <v-dialog v-model="modal2" activator="parent" width="auto">
                            <v-time-picker v-if="modal2" v-model="endTime"></v-time-picker>
                        </v-dialog>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
    </v-container>

    <v-container>
        <v-card class="pa-4">
            <h2>Set Slot Duration</h2>
            <v-select v-model="slotDuration" :items="[15, 30, 60]" label="Slot Duration (minutes)"></v-select>
            <v-btn color="primary" @click="saveBusinessHours">Save</v-btn>
        </v-card>
    </v-container>
</template>

<script setup>
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/init.js";
import { ref } from "vue";

const menu2 = ref(false)
const modal2 = ref(false)

const startTime = ref("09:00")
const endTime = ref("17:00")
const slotDuration = ref(30)

async function saveBusinessHours() {
    const businessHoursRef = doc(db, "business_hours", "default");
    await setDoc(businessHoursRef, {
        start: startTime.value,
        end: endTime.value,
        slotDuration: slotDuration.value,
    });
    alert("Business hours saved!");
}

</script>
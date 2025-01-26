<template>

    <v-container>
        <h2>Business Hours & Time Slots</h2>
        <v-card class="pa-4">
            <h3>Set Business Hours</h3>
            <v-row justify="space-around">
                <v-col cols="11" sm="5">
                    <v-text-field v-model="businessHours.start" :active="menu2" :focus="menu2" label="Start Time"
                        prepend-icon="mdi-clock-time-four-outline" readonly>
                        <v-menu v-model="menu2" :close-on-content-click="false" activator="parent"
                            transition="scale-transition">
                            <v-time-picker v-if="menu2" v-model="businessHours.start" full-width></v-time-picker>
                        </v-menu>
                    </v-text-field>
                </v-col>

                <v-col cols="11" sm="5">
                    <v-text-field v-model="businessHours.end" :active="modal2" :focused="modal2" label="Closing Time"
                        prepend-icon="mdi-clock-time-four-outline" readonly>
                        <v-dialog v-model="modal2" activator="parent" width="auto">
                            <v-time-picker v-if="modal2" v-model="businessHours.end"></v-time-picker>
                        </v-dialog>
                    </v-text-field>
                </v-col>
            </v-row>
            <div class="py-4">
                <h3>Set Slot Duration</h3>
                <v-select v-model="businessHours.slotDuration" :items="[15, 30, 60]"
                    label="Slot Duration (minutes)"></v-select>
                <v-btn color="primary" @click="saveBusinessHours">Save</v-btn>
            </div>
        </v-card>
    </v-container>

    <v-container>
        <v-card class="mt-5">
            <v-card-title>View Appointments</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-date-picker v-model="selectedDate" :min="getMinimumDate"></v-date-picker>
                    </v-col>
                </v-row>
                <v-btn color="primary" @click="fetchAppointments" :disabled="isFetchActivated">Get
                    Appointments</v-btn>
                <v-data-table :headers="appointmentHeaders" :items="appointments" class="mt-3" dense></v-data-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup>
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "../firebase/init.js";
import { computed, reactive, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const menu2 = ref(false);
const modal2 = ref(false);
const businessHours = ref({
    start: "",
    end: "",
    slotDuration: "",
})

const selectedDate = ref(null);

const startTime = ref("09:00");
const endTime = ref("17:00");
const slotDuration = ref(30);

const appointments = ref([]);
const appointmentHeaders = ref([
    { title: "Date", value: "date" },
    { title: "Time", value: "slot" },
    { title: "Name", value: "user" },
]);

const adminEmail = ref("admin@nissikazembe.com");
const isAdmin = ref(false);

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser && currentUser.email === adminEmail.value) {
            isAdmin.value = true;
        } else {
            //alert("Access denied. Admin only.");
            console.log("Access denied. Admin only.");

        }
    });
    loadBusinessHours();
});

const getMinimumDate = computed(() => {
    return new Date().toISOString().split('T')[0]
})

const isFetchActivated = computed(() => {
    return !selectedDate.value;
})

async function saveBusinessHours() {
    const businessHoursRef = doc(db, "business_hours", "default");
    await setDoc(businessHoursRef, businessHours.value);
    alert("Business hours saved!");
}

async function loadBusinessHours() {
    const businessHoursRef = doc(db, "business_hours", "default");
    const businessHoursSnap = await getDoc(businessHoursRef);
    if (businessHoursSnap.exists()) {
        businessHours.value = businessHoursSnap.data();
    }
}

async function fetchAppointments() {
    if (!selectedDate.value) return;

    console.log(selectedDate.value)

    const appointmentsRef = collection(db, "appointments");
    const q = query(
        appointmentsRef,
        where("date", "==", selectedDate.value.toLocaleDateString())
    );
    const querySnapshot = await getDocs(q);

    appointments.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

}


</script>
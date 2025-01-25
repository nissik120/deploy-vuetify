<template>
    <v-container class="bg-grey-lighten-1 py-8">
        <h2>Unser Dienste</h2>
        <p class="py-2">Waehlen Sie ein Angebot und Datum fuer Oeffenzeit zu finden.</p>
        <v-row>
            <v-col v-for="(item, index) in serviceCards" :key="index" cols="12" sm="6" md="4">
                <v-card max-width="344" :color="getServiceColor(index)" :elevation="getServiceElevation(index)"
                    @click="onSelectService(index)">
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text>{{ item.description }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="pa-4">
                    <h2>Buchen einen Termin</h2>
                    <v-date-picker v-model="selectedDate" label="Pick a Date" :min="getMinimumDate"></v-date-picker>
                    <v-btn color="primary" @click="fetchSlots" :disabled="isCheckSlotsActivated">
                        Check Slots
                    </v-btn>

                    <v-divider class="my-4"></v-divider>

                    <v-list v-if="getSlotLength">
                        <v-list-item v-for="slot in bookingSlots" :key="slot" @click="bookSlot(slot)">
                            <v-list-item-title>{{ slot }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <p v-else>No available slots for the selected date.</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { collection, doc, getDoc, getDocs, setDoc, where, query } from "firebase/firestore";
import { db } from "../firebase/init.js";
import { computed, ref } from "vue";

const selectedService = ref(null)
const selectedDate = ref(null)
const bookingSlots = ref([])

const serviceCards = ref([
    { title: "Option 1", description: "Description for option 1" },
    { title: "Option 2", description: "Description for option 2" },
    { title: "Option 3", description: "Description for option 3" },
])

const filterOutDates = computed(() => {

})

const getMinimumDate = computed(() => {
    return new Date().toISOString().split('T')[0]
})

const isCheckSlotsActivated = computed(() => {
    return !selectedDate.value || !selectedService.value
})

const getServiceElevation = (serviceIndex) => {
    return selectedService.value === serviceIndex ? 10 : 2;
}

const getServiceColor = (serviceIndex) => {
    return selectedService.value === serviceIndex ? 'primary' : 'grey lighten-4';
}

function onSelectService(serviceIndex) {
    selectedService.value = selectedService.value === serviceIndex ? null : serviceIndex;
}

const getSlotLength = computed(() => {
    return bookingSlots.value.length;
})

async function fetchSlots() {
    // Fetch business hours
    const businessHoursRef = doc(db, "business_hours", "default");
    const businessHoursSnap = await getDoc(businessHoursRef);

    if (!businessHoursSnap.exists()) {
        alert("Business hours not set.");
        return;
    }

    const { start, end, slotDuration } = businessHoursSnap.data();
    const allSlots = generateSlots(start, end, slotDuration);

    // Fetch booked slots for the selected date
    const appointmentsRef = collection(db, "appointments");
    const appointmentsQuery = query(
        appointmentsRef,
        where("date", "==", selectedDate.value)
    );
    const appointmentsSnap = await getDocs(appointmentsQuery);

    const bookedSlots = appointmentsSnap.docs.map((doc) => doc.data().slot);
    bookingSlots.value = allSlots.filter((slot) => !bookedSlots.includes(slot));
}

function generateSlots(start, end, slotDuration) {
    const bookingSlots = [];

    let [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);

    // Adjust start time to skip past invalid slots
    let currentTime = new Date();
    let currentDate = currentTime.toISOString().split('T')[0];
    let currentSelectedDate = selectedDate.value.toISOString().split('T')[0];
    console.log(currentSelectedDate)
    const isToday = currentDate === selectedDate.value;
    if (isToday) {
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        if (
            startHour < currentHour ||
            (startHour === currentHour && startMin <= currentMinute)
        ) {
            startHour = currentHour;
            startMin = currentMinute;

            // Round up to the next valid slot
            if (startMin % slotDuration !== 0) {
                startMin = Math.ceil(startMin / slotDuration) * slotDuration;
                if (startMin >= 60) {
                    startMin -= 60;
                    startHour++;
                }
            }
        }
    }


    while (
        startHour < endHour || (startHour === endHour && startMin < endMin)
    ) {
        bookingSlots.push(`${String(startHour).padStart(2, "0")}:${String(startMin).padStart(2, "0")}`);
        startMin += slotDuration;

        if (startMin >= 60) {
            startMin -= 60;
            startHour++;
        }
    }

    return bookingSlots;
}

async function bookSlot(slot) {
    const bookingRef = doc(db, "appointments", `${selectedDate.value}-${slot}`);
    await setDoc(bookingRef, {
        date: selectedDate.value,
        slot,
        user: "John Doe", // Replace with actual user data
    });
    alert(`Successfully booked slot: ${slot}`);
    await fetchSlots(); // Refresh slots
}


</script>
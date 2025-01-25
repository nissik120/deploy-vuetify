/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VTimePicker } from 'vuetify/labs/VTimePicker'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VTimePicker,
  },
  theme: {
    defaultTheme: 'dayTheme',
    themes: {
      dayTheme: {
        dark: false,
        colors: {
          background: '#F5F5F5', // Adjusted light gray
          surface: '#FFFFFF',    // Optional card color
          primary: '#A00000',    // Adjusted Burgundy
          secondary: '#D4A374',  // Adjusted Beige
          text: '#1A1A1A',       // Adjusted dark gray
        },
      },
      nightTheme: {
        dark: true,
        colors: {
          background: '#2A2C2E', // Adjusted dark gray
          surface: '#1E1E1E',    // Optional card color
          primary: '#FF4D4D',    // Adjusted Burgundy
          secondary: '#B89470',  // Adjusted Beige
          text: '#E0E0E0',       // Adjusted navy blue (lighter for dark mode)
        },
      },
    },
  },
})

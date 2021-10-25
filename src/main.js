import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import VCalendar from 'v-calendar'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

Vue.config.productionTip = false

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});


// Register components in your 'main.js'
// Vue.component('calendar', Calendar)
// Vue.component('date-picker', DatePicker)
// Vue.use(SetupCalendar, {})
// Vue.use('DatePicker',DatePicker)

new Vue({
  router,
  store,
  // Calendar,
  // DatePicker,
  render: h => h(App)
}).$mount('#app')

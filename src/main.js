import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import { store } from './store/index.js'
 import VCalendar from 'v-calendar'
 import '@/static/css/Reset.css'




// firebase 설정시작
// Import the functions you need from the SDKs you need
// firebase 초기화 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvIfVEfacmz8prCyXrbGc2nEqEbV5mEe4",
  authDomain: "test2-9867e.firebaseapp.com",
  projectId: "test2-9867e",
  storageBucket: "test2-9867e.appspot.com",
  messagingSenderId: "81694299059",
  appId: "1:81694299059:web:645fdf36fb5c52d38731c6",
  measurementId: "G-XMT3KHHMDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase 설정 끝


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

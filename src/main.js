import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import startMusic from '@/assets/audio/start.wav';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDHKwQ0vtuvuvixL9PCFj4jBjglRseXGc0",
  authDomain: "outer-space-z.firebaseapp.com",
  projectId: "outer-space-z",
  storageBucket: "outer-space-z.appspot.com",
  messagingSenderId: "696855684230",
  appId: "1:696855684230:web:d2202c2385d61023eddd07"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

import App from './App.vue'
import router from './router'

const app = createApp(App)

// var audio = new Audio(startMusic);
// audio.play();

app.use(createPinia())
app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCY2sy5c1ciOpwpv_L9kLT-mwshNHOsti0",
    authDomain: "filmrock-585e2.firebaseapp.com",
    projectId: "filmrock-585e2",
    storageBucket: "filmrock-585e2.appspot.com",
    messagingSenderId: "222371431552",
    appId: "1:222371431552:web:e528a11e853c482ed19265",
    databaseURL: "https://filmrock-585e2-default-rtdb.europe-west1.firebasedatabase.app/"
  };
const firebaseApp = initializeApp(firebaseConfig)
export const database = getDatabase(firebaseApp)

createApp(App).use(store).use(router).mount('#app')
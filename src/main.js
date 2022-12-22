import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { auth } from './firebaseConfig'
// import * as firebase from 'firebase/app'
// import { initializeApp } from 'firebase/app'
// import { getAuth } from "firebase/auth";


// Bootsrap CSS, JS
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

//ANIMATE CSS
// import '../node_modules/animate.css/animate.min.css'

//FONT AWESOME
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

//AOS CSS
import '../node_modules/aos/dist/aos.css'

//AOS JS
import '../node_modules/aos/dist/aos.js'

//DROPIFY CSS
// import '../node_modules/dropify/dist/css/dropify.min.css'

//DROPIFY JS
// import '../node_modules/dropify/dist/js/dropify.min'

// CUSTOM CSS
import './assets/css/main.css' 


// import GlobalMixin from './mixins/GlobalMixin'

// createApp(App).use(store).mixin(GlobalMixin).use(router).mount('#app')



// firebase.initializeApp({
//     apiKey: "AIzaSyBtgOWRrASFsV6KwVIjy2v0OyfyoR91yhk",
//     authDomain: "lightlife-church.firebaseapp.com",
//     databaseURL: "https://lightlife-church-default-rtdb.firebaseio.com",
//     projectId: "lightlife-church",
//     storageBucket: "lightlife-church.appspot.com",
//     messagingSenderId: "573761391869",
//     appId: "1:573761391869:web:7ed2df5fa7fedbc751c294",
//     measurementId: "G-SQV0V821LW"
//   });

// const firebaseConfig = {
//     apiKey: "AIzaSyBtgOWRrASFsV6KwVIjy2v0OyfyoR91yhk",
//     authDomain: "lightlife-church.firebaseapp.com",
//     databaseURL: "https://lightlife-church-default-rtdb.firebaseio.com",
//     projectId: "lightlife-church",
//     storageBucket: "lightlife-church.appspot.com",
//     messagingSenderId: "573761391869",
//     appId: "1:573761391869:web:7ed2df5fa7fedbc751c294",
//     measurementId: "G-SQV0V821LW"
//   };
//   const firebase = initializeApp(firebaseConfig)

//   export const auth = getAuth(firebase)

createApp(App).use(store).use(router).mount('#app')


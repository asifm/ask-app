
import Vue from 'vue';

import VueFire from 'vuefire';
import Firebase from 'firebase';

Vue.use(VueFire);

var firebaseApp = Firebase.initializeApp({
    databaseURL: "https://the-wall-b3fb1.firebaseio.com",
});


export const db = firebaseApp.database();
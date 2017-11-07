/*  NOTE:::::
need to pass the userid(as specified while writing the new object) 
as an argument in order to get the data of that specific user.
*/


const firebase = require('firebase');
const fs = require('fs');

let userid = process.argv[2];  

firebase.initializeApp({
  databaseURL: "https://testing-eb3f2.firebaseio.com/"
})

const dbRef = firebase.database().ref('People');

  dbRef.child(userid).once('value').then(function(snapshot) {
    console.log(snapshot.val());
  }, function(errorObject){
    console.log(errorObject.code);
  });

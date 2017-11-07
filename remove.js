/*  NOTE:::::
need to pass the userid(as specified while writing the new object) 
as an argument in order to remove that specific user.
*/


const firebase = require('firebase');
let idno = process.argv[2];
firebase.initializeApp({
  databaseURL: "https://testing-eb3f2.firebaseio.com/"
})
const dbRef = firebase.database().ref('People');


dbRef.child(idno).remove();


console.log("Bingo! Kicked off Successfully!");
console.log("Press Ctrl+C to exit");

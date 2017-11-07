/*  NOTE:::::
need to pass the userid, name email and phoneno. as arguments.
*/


const firebase = require('firebase')

let id = process.argv[2];
let name = process.argv[3];
let email = process.argv[4];
let phone = process.argv[5];

firebase.initializeApp({
  databaseURL: "https://testing-eb3f2.firebaseio.com/"
})

const dbRef = firebase.database().ref('People');

function writeUserData(userId, name, email, phone) {
  firebase.database().ref('People/' + userId).set({
    username: name,
    email: email,
    phone: phone,
  });
  
  console.log("Ding Dong! New Person Added!!");
  console.log("What Are you waiting for? Press Ctrl+C!");
}

writeUserData(id,name,email,phone);


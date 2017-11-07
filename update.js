/*  NOTE:::::
need to pass the userid(as specified while writing the new object) 
as an argument in order to edit the data of specific user. 
Also need to specify what field update and the value for that field as other arguments.
eg: node update.js 03 name akshil 
*/


const firebase = require('firebase');
const fs = require('fs');

let userid = process.argv[2];  
let specificfield = process.argv[3];
let specificvalue = process.argv[4];

firebase.initializeApp({
  databaseURL: "https://testing-eb3f2.firebaseio.com/"
})

const dbRef = firebase.database().ref('People');

dbRef.child(userid).push({
    specificfield : specificvalue
});
console.log("Database Updated");



var firebaseConfig = {
    apiKey: "AIzaSyDsN7eR49-3tjtqbBoxoEJjxQlnD1OFxLI",
    authDomain: "kwitter-social-website-cea17.firebaseapp.com",
    databaseURL: "https://kwitter-social-website-cea17-default-rtdb.firebaseio.com",
    projectId: "kwitter-social-website-cea17",
    storageBucket: "kwitter-social-website-cea17.appspot.com",
    messagingSenderId: "606604869947",
    appId: "1:606604869947:web:67190fcbeb0e9f2386371e",
    measurementId: "G-Z94W5RNGMC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

   
   });});}
getData();
//YOUR FIREBASE LINKS
var firebaseConfig = {

      apiKey: "AIzaSyCYWk6SFgqXsqjzIjjOtceVJQqhNU_-3ZE",
    
      authDomain: "kwitter-app-adb6b.firebaseapp.com",
    
      databaseURL: "https://kwitter-app-adb6b-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-app-adb6b",
    
      storageBucket: "kwitter-app-adb6b.appspot.com",
    
      messagingSenderId: "896470116302",
    
      appId: "1:896470116302:web:66519d16b5c847cb05ad9f",
    
      measurementId: "G-QBK3809T72"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0      
      });
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

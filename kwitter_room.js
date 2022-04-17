
//ADD YOUR  // Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDit3h4aXye3ijslATDrdVM28QiE7CC05U",
  authDomain: "kwitter-5842a.firebaseapp.com",
  databaseURL: "https://kwitter-5842a-default-rtdb.firebaseio.com",
  projectId: "kwitter-5842a",
  storageBucket: "kwitter-5842a.appspot.com",
  messagingSenderId: "970213035343",
  appId: "1:970213035343:web:e29150854ef8133833493a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

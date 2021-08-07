

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCvI1utDc3W7x5v6NIyX-RzUBu62AxS8PA",
    authDomain: "let-s-chat-app-df000.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-df000-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-df000",
    storageBucket: "let-s-chat-app-df000.appspot.com",
    messagingSenderId: "186489687761",
    appId: "1:186489687761:web:cc1eb31e4dcde030c17ff0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  Username = localStorage.getItem("NameUsers");
document.getElementById("usernamename").innerHTML = "Welcome " + Username;



function addroom(){
  roomname = document.getElementById("roomname").value;
  console.log(roomname);
  firebase.database().ref("/").child(roomname).update({
    Purpose : "adding user"
  });

  localStorage.setItem("Room", roomname);
  window.location="Kwitter_Chat.html";
}


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("roomnamesfromdata").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      
row = "<div class='room_name' id=" +Room_names+"onclick='redirecttoroom(this.id)'>" +Room_names+ "</div><hr>";
document.getElementById("roomnamesfromdata").innerHTML += row;


      //End code
    });
  });
}
getData();



function redirecttoroom(names){
  console.log(names);
localStorage.setItem("Room", names);

window.location="Kwitter_Chat.html";


}


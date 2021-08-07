function addUser(){
    Name = document.getElementById("nameuser").value;

    localStorage.setItem("NameUsers", Name);

    window.location="Kwitter_room.html";
}
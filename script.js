function login(){

const code =
document.getElementById("passcode").value;

if(code === "143"){

document
.getElementById("loginCard")
.style.display = "none";

document
.getElementById("welcomePage")
.classList.remove("hidden");

}else{

alert("Wrong Passcode 💔");

}

}

function openHeart(){

window.location.href =
"heart.html";

}

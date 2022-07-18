const buttonHappy = document.getElementById("happy");
const buttonSad = document.getElementById("sad");
const icon = document.getElementById("icon-smiley");

buttonHappy.addEventListener("click", () =>{
    buttonHappy.style.backgroundColor="red";
    buttonSad.style.backgroundColor="white";
    icon.src="././images/happy.png";
    
});

  buttonSad.addEventListener("click", ()=> {
    buttonHappy.style.backgroundColor="white";
    buttonSad.style.backgroundColor="red";
    icon.src="././images/sad.png";
    
  });
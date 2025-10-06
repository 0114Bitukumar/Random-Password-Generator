
  const passwordDiv = document.getElementById("password");
  const length = 16;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*-_.,/-+=~";

  const allChars = upperCase + lowerCase + number + symbol;

  function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordDiv.value = password;
  }


// To copy password: 
function copyPassword() {
  passwordDiv.select();
  navigator.clipboard.writeText(passwordDiv.value);
}

// const document = Document;

// function copyPassword() {
//   passwordDiv.select();
//   document.execCommand("copy");
// }


  var typed = new Typed(".typed",{
    strings: ["<span>Please subscribes this channel</span> <br> & like this video", "and share your freinds", ""],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
    loop: true
  });
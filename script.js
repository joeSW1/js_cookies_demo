function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

let currentSessionUserName = "";

if (getCookie("userName")) {
    currentSessionUserName = getCookie("userName");
}

const welcomeMessage = document.body.querySelector('#welcomeMessage');
const inputBox = document.body.querySelector('#userNameInput');
const submitButton = document.body.querySelector('#submit');

function updateUserName() {
    if (currentSessionUserName) {
        welcomeMessage.textContent = `Hi ${currentSessionUserName}!`;
    } else {
        welcomeMessage.textContent = "Welcome!";
    }
}

updateUserName();

submitButton.addEventListener('click',()=>{
    currentSessionUserName = inputBox.value;
    updateUserName();
    document.cookie=(`userName=${currentSessionUserName}`);
})
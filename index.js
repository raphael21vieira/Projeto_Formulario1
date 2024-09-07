const form = document.querySelector("#formulario");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const msgTextArea = document.querySelector("#message");

// função que valida email
const emailValidation = (email) => {
  //criando regex
  const emailRegex = new RegExp(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/);
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

//função que valida password
const passwordValidation = (password, minDigit) => {
  if (password.length >= minDigit) {
    return true;
  } else {
    return false;
  }
};

//função que valida mensagem

const msgValidation=(msg, minMsg)=>{
  if (msg.length>=minMsg) {
    return true;
  } else{
    return false;
  }
}


////////////////////////////////////////////////////////

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value === "") {
    alert("por favor , preencha o seu nome");
    return;
  }

  if (emailInput.value === "" || !emailValidation(emailInput.value)) {
    alert("por favor , preencha o seu email");
    return;
  }

  if (!passwordValidation(passwordInput.value, 8)) {
    alert("o número mínimo de caracteres é  8");
    return;
  }

  if (jobSelect.value === "") {
    alert("por favor preencha a sua situação ");
    return;
  }

  if (msgTextArea.value === "" ) {
    alert("por favor insira uma mensagem ");
    return;
    
  }
 // form.submit();
 window.location.href = "agradecimento.html"
});

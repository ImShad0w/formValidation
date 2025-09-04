const email = document.getElementById("mail");
const btn = document.getElementById("submit");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

function checkEmailValid() {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email!!!");
  }
  else {
    email.setCustomValidity("");
  }
}

btn.addEventListener("click", () => {
  checkEmailValid();
})

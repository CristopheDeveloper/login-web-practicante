const form = document.getElementById("recoverForm");
const emailInput = document.getElementById("recoverEmail");
const successMessage = document.getElementById("successMessage");
const spinner = document.querySelector(".spinner");
const btnText = document.querySelector(".btn-text");
const backLink = document.getElementById("backLink");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  spinner.style.display = "inline-block";
  btnText.textContent = "Enviando...";
  form.querySelector(".btn").disabled = true;

  // Simulación con espera de 1.5s
  setTimeout(() => {
    successMessage.style.display = "block";
    successMessage.className = "alert success";
    successMessage.textContent = "✅ Correo enviado correctamente.";

    backLink.style.display = "inline-block"; // mostrar enlace de regreso
    spinner.style.display = "none";
    btnText.textContent = "Enviar enlace";
    form.querySelector(".btn").disabled = false;
    emailInput.value = "";
  }, 1500);
});

emailInput.addEventListener("input", function () {
  successMessage.style.display = "none";
  successMessage.className = "alert";
  successMessage.textContent = "";
  backLink.style.display = "none";
});



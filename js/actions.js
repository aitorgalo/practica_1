// Asside Nuevo Mensaje
messages = document.getElementById("messages");
aside = document.querySelector("aside");
aside.style.visibility = "hidden";
aside.addEventListener("click", function () {
  aside.style.visibility = "hidden";
});
messages.addEventListener("click", function () {
  aside.style.visibility = "visible";
});

// Corazon
corazones = document.getElementsByClassName("corazon");
for (let i = 0; i < corazones.length; i++) {
  corazones.item(i).addEventListener("click", function (event) {
    // Cambiar corazón
    if (event.target.innerHTML == "💗") event.target.innerHTML = "💖";
    else event.target.innerHTML = "💗";
  });
}

// Acciones Textbos
inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
  // Get Input
  input = inputs.item(i);

  // Vaciar Texto
  input.addEventListener("click", function (event) {
    event.target.value = "";
  });

  // Pierde Focus
  input.addEventListener("focusout", function (event) {
    if (event.target.value == "") {
      if (event.target.classList.contains("comment"))
        event.target.value = "Añade un comentario...";
      else {
        event.target.value = "Buscar ...";
      }
    }
  });

  // Add Comment
  if (input.classList.contains("comment")) {
    // Evento Enter, extraído de https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
    input.addEventListener("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        document.getElementById( event.target.id.replace('comment','description')   ).innerHTML += "<br>" + `<span class="nick">aitorgalo</span> ` + event.target.value;
        event.target.value = "";
      }
    });
  }
}

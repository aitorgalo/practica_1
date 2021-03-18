// Extraído de https://es.stackoverflow.com/questions/445/c%C3%B3mo-obtener-valores-de-la-url-get-en-javascript/457
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

window.addEventListener("DOMContentLoaded", () => {
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
      if (this.innerHTML == "💗") this.innerHTML = "💖";
      else this.innerHTML = "💗";
    });
  }

  // Acciones Textbos
  inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    // Get Input
    input = inputs.item(i);

    // Vaciar Texto
    input.addEventListener("click", function (event) {
      this.value = "";
    });

    // Pierde Focus
    input.addEventListener("focusout", function (event) {
      if (this.classList.contains("comment"))
        this.value = "Añade un comentario...";
      else {
        this.value = "Buscar ...";
      }
    });

    // Add Comment
    if (input.classList.contains("comment")) {
      // Evento Enter, extraído de https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
      input.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Obtener comentario
          comments = document.getElementById(
            this.id.replace("comment", "description")
          );
          // Salto de Línea
          comments.appendChild(document.createElement("br"));

          // Nick
          nick = document.createElement("span");
          nick.classList.add("nick");
          nick.innerHTML = "aitorgalo";
          comments.appendChild(nick);

          // Comentario
          comment = document.createElement("span");
          comment.innerHTML = ` ${this.value}`;
          comments.appendChild(comment);

          // Vacío Textbox
          this.value = "";
        }
      });
    }
  }

  if (getParameterByName("searcher") != "")
    document.getElementById(
      "description_1"
    ).innerHTML = document
      .getElementById("description_1")
      .innerHTML.replaceAll(
        getParameterByName("searcher"),
        "<strong>" + getParameterByName("searcher") + "</strong>"
      );
});

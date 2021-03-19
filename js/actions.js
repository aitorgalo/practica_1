// Para que se active al cargar toda la página
window.addEventListener("DOMContentLoaded", () => {
  // Asside Revisar Nuevo Mensaje Recibido
  messages = document.getElementById("messages");
  aside = document.querySelector("aside");
  aside.style.visibility = "hidden";
  aside.addEventListener("click", function () {
    aside.style.visibility = "hidden";
  });
  messages.addEventListener("click", function () {
    aside.style.visibility = "visible";
  });

  // Corazon Like
  corazones = document.getElementsByClassName("corazon");
  for (let i = 0; i < corazones.length; i++) {
    corazones.item(i).addEventListener("click", function (event) {
      // Cambiar corazón
      if (this.innerHTML == "💗") this.innerHTML = "💖";
      else this.innerHTML = "💗";
    });
  }

  // Acciones Textbox
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
  }

  // Acciones Form
  for (let i = 0; i < document.forms.length; i++) {
    // Busco Form
    form = document.forms[i];

    // Pongo Acción al hacer submit
    form.addEventListener("submit", function (event) {
      // Para no hacer el submit
      event.preventDefault();

      // Obtener post
      post = document.getElementById(this.id.replace("form", "description"));
      // Obtener comentario
      comment = document.getElementById(this.id.replace("form", "comment"));

      // Si tengo algún comentario a añadir
      if (comment.value != "") {
        // Salto de Línea
        post.appendChild(document.createElement("br"));

        // Nick
        nick = document.createElement("span");
        nick.classList.add("nick");
        nick.innerHTML = "aitorgalo";
        post.appendChild(nick);

        // Comentario
        newcomment = document.createElement("span");
        newcomment.innerHTML = ` ${comment.value}`;
        post.appendChild(newcomment);
      }
      else
      {
        alert('Añade algún comentario por favor.')
      }

      // Vacío Textbox
      comment.value = "";
    });
  }

  // Add Comment
  if (input.classList.contains("comment")) {
    /*

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

*/
  }
});

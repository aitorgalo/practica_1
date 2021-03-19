// Cambio Visibilidad Asside
function assideVisibility(messages, aside) {
  aside.style.visibility = "hidden";
  aside.addEventListener("click", function () {
    aside.style.visibility = "hidden";
  });
  messages.addEventListener("click", function () {
    aside.style.visibility = "visible";
  });
}

// Cambio Corazones
function heartAction(corazones) {
  for (let i = 0; i < corazones.length; i++) {
    corazones.item(i).addEventListener("click", function (event) {
      // Cambiar corazón
      if (this.innerHTML == "💗") this.innerHTML = "💖";
      else this.innerHTML = "💗";
    });
  }
}

// Vaciar y Rellenar Textbox
function textBoxAction(inputs) {
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
}

function formAction() {
  for (let i = 0; i < document.forms.length; i++) {
    // Busco Form
    form = document.forms[i];

    // Pongo Acción al hacer submit
    form.addEventListener("submit", function (event) {
      // Para no hacer el submit
      event.preventDefault();

      // Searcher
      if (this.id === "searcher") {
        // Buscar imágen (sería en la propia web cuándo tengamos base de datos, de momento pongo google)
        window.open(
          "http://google.es/search?tbm=isch&q=" + this.lastChild.value,
          "_blank"
        );
      }
      // Comment
      else {
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
        } else {
          console.log("Sin comentarios...");
        }

        // Vacío Textbox
        comment.value = "";
      }
    });
  }
}

// Para que se active al cargar toda la página
window.addEventListener("DOMContentLoaded", () => {
  // Set Asside Visibility
  assideVisibility(
    document.getElementById("messages"),
    document.querySelector("aside")
  );

  // Corazon Like
  heartAction(document.getElementsByClassName("corazon"));

  // Acciones Textbox
  textBoxAction(document.getElementsByTagName("input"));

  // Acciones Form
  formAction();
});

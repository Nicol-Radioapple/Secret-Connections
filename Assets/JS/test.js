function generatePersonality(event) {
    // Evita que el formulario se envíe y recargue la página
    event.preventDefault();

    // Obtenemos las respuestas y convertimos a números
    const hobbyScore = parseInt(document.getElementById("hobby").value);
    const dreamScore = parseInt(document.getElementById("dream").value);
    const moodScore = parseInt(document.getElementById("mood").value);
    const superpowerScore = parseInt(document.getElementById("superpower").value);
    const favColorScore = parseInt(document.getElementById("favColor").value);

    // Sumamos todos los puntajes
    const totalScore = hobbyScore + dreamScore + moodScore + superpowerScore + favColorScore;
     // Generar la descripción y seleccionar los usuarios correspondientes
     generateDescriptionAndSelectUsers(totalScore);
 }
 // Lista de usuarios en común con enlaces a sus perfiles y publicaciones
 const commonUsersData = {
    tranquila: [
      { name: "SereinTemps", profileUrl: "", postsUrl: "publicaciones-tranquilo1.html" },
      { name: "CalmaLuna", profileUrl: "", postsUrl: "publicaciones-tranquilo2.html" },
      { name: "LofiVibes", profileUrl: "", postsUrl: "publicaciones-tranquilo3.html" }
    ],
    curioso: [
      { name: "Starman83", profileUrl: "", postsUrl: "" },
      { name: "WanderLustig", profileUrl: "", postsUrl: "publicaciones-curioso2.html" },
      { name: "Usuario Curioso 3", profileUrl: "publicaciones-curioso3.html", postsUrl: "publicaciones-curioso3.html" }
    ],
    apasionado: [
      { name: "DreamyVoyager", profileUrl: "", postsUrl: "publicaciones-apasionado1.html" },
      { name: "SunkissedMuse", profileUrl: "", postsUrl: "publicaciones-apasionado2.html" },
      { name: "VintageSoul", profileUrl: "", postsUrl: "publicaciones-apasionado3.html" }
    ]
  };
  let description = "";
  let selectedUsers = [];

// Función para generar la descripción y seleccionar usuarios
function generateDescriptionAndSelectUsers(totalScore) {
    if (totalScore <= 7) {
      description = "Eres una persona tranquila y reflexiva, que valora la calma y la serenidad.";
      selectedUsers = commonUsersData.tranquila;
    } else if (totalScore <= 14) {
      description = "Tienes un espíritu curioso y aventurero, siempre en busca de nuevas experiencias.";
      selectedUsers = commonUsersData.curioso;
    } else {
      description = "Eres una persona apasionada y enérgica, siempre dispuesta a explorar y vivir intensamente.";
      selectedUsers = commonUsersData.apasionado;
    }
    // Mostrar la descripción en el primer modal
    document.getElementById("modalDescription").innerHTML = description;
  }
 // Función para cargar los usuarios seleccionados en el segundo modal
 function loadCommonUsers() {
    const userList = document.getElementById("commonUsersList");
    userList.innerHTML = ""; // Limpiar la lista actual

    // Agregar cada usuario con botones de "Ver Perfil" y "Ver Publicaciones"
    selectedUsers.forEach(user => {
      const listItem = document.createElement("li");
      listItem.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-2");

      // Nombre del usuario
      const userName = document.createElement("span");
      userName.textContent = user.name;

      // Botón de "Ver Perfil"
      const profileButton = document.createElement("button");
      profileButton.textContent = "Ver Perfil";
      profileButton.classList.add("btn", "btn-secondary", "btn-sm", "me-2");
      profileButton.onclick = () => {
        window.location.href = user.profileUrl; // Redirige a la página de perfil del usuario
      };

      // Botón de "Ver Publicaciones"
      const postsButton = document.createElement("button");
      postsButton.textContent = "Ver Publicaciones";
      postsButton.classList.add("btn", "btn-primary", "btn-sm");
      postsButton.onclick = () => {
        window.location.href = user.postsUrl; // Redirige a la página de publicaciones del usuario
      };

      // Agregar elementos al listItem
      listItem.appendChild(userName);
      listItem.appendChild(profileButton);
      listItem.appendChild(postsButton);
      userList.appendChild(listItem);
    });
  }
  // Evento para mostrar el segundo modal cuando se cierra el primero
  document.getElementById("change-button").addEventListener("click", function() {
    const firstModal = new bootstrap.Modal(document.getElementById("resultModal"));
    firstModal.hide();

    // Cargar usuarios en común y abrir el segundo modal
    loadCommonUsers();
    const secondModal = new bootstrap.Modal(document.getElementById("commonUsersModal"));
    secondModal.show();
  });
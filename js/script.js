document.addEventListener("DOMContentLoaded", function () {

  // 1. FUNCIONALIDAD LOGIN
  if (document.getElementById("loginForm")) {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const usuario = document.getElementById("usuario").value;
      const password = document.getElementById("password").value;
      const rol = document.getElementById("rol").value;

      if (usuario && password) {
        alert(`Bienvenido/a, ${usuario} (rol: ${rol})`);
        window.location.href = "clases.html";
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  }

  // 2. CARGAR MATERIAS EN clases.html
  if (document.getElementById("lista-materias")) {
    const materias = [
      { nombre: "Matemáticas", imagen: "/img/clases/mates.jpg", horario: "Lunes y Miércoles - 8:00 a.m. a 10:00 a.m.", url: "/actividades.html" },
      { nombre: "Física", imagen: "/img/clases/fisica.jpg", horario: "Martes y Jueves - 9:00 a.m. a 11:00 a.m.", url: "/actividades.html" },
      { nombre: "Proyectos informáticos", imagen: "/img/clases/proyectoinfo.png", horario: "Viernes - 10:00 a.m. a 12:00 p.m.", url: "/actividades.html" },
      { nombre: "Programación", imagen: "/img/clases/programacion.jpg", horario: "Lunes y Miércoles - 2:00 p.m. a 4:00 p.m.", url: "/actividades.html" },
      { nombre: "Inglés", imagen: "/img/clases/ingles.jpg", horario: "Martes - 1:00 p.m. a 3:00 p.m.", url: "/actividades.html" }
    ];

    const lista = document.getElementById("lista-materias");

    materias.forEach(materia => {
      const li = document.createElement("li");

      const enlace = document.createElement("a");
      enlace.href = materia.url;
      enlace.target = "_blank";
      enlace.style.textDecoration = "none";
      enlace.style.color = "inherit";
      enlace.style.display = "flex";
      enlace.style.alignItems = "center";
      enlace.style.gap = "15px";

      const img = document.createElement("img");
      img.src = materia.imagen;
      img.alt = materia.nombre;
      img.width = 100;
      img.height = 100;
      img.style.borderRadius = "5px";
      img.style.objectFit = "cover";

      const textoContainer = document.createElement("div");

      const nombre = document.createElement("div");
      nombre.textContent = materia.nombre;
      nombre.style.fontWeight = "bold";

      const horario = document.createElement("div");
      horario.textContent = materia.horario;
      horario.style.fontSize = "0.9em";
      horario.style.color = "#555";

      textoContainer.appendChild(nombre);
      textoContainer.appendChild(horario);

      enlace.appendChild(img);
      enlace.appendChild(textoContainer);

      li.style.backgroundColor = "#f0f0f0";
      li.style.padding = "10px";
      li.style.borderRadius = "8px";
      li.style.margin = "15px 0";
      li.style.textAlign = "left";

      li.appendChild(enlace);
      lista.appendChild(li);
    });
  }

  // 3. CARGAR ACTIVIDADES EN actividad.html
  if (document.getElementById("listaActividades")) {
    const actividades = [
      { nombre: "Taller de Matemáticas", fecha: "2025-04-10", nota: 85 },
      { nombre: "Actividad de física", fecha: "2025-04-07", nota: 60 },
      { nombre: "Gestión de proyectos informáticos y arquitectura", fecha: "2025-04-12", nota: null },
      { nombre: "Proyecto de Programación", fecha: "2025-04-07", nota: null },
      { nombre: "Presentación de Inglés", fecha: "2025-04-15", nota: null }
    ];

    const contenedor = document.getElementById("listaActividades");

    actividades.forEach(actividad => {
      const li = document.createElement("li");
      li.classList.add("actividad");

      const info = document.createElement("div");
      info.classList.add("info");
      info.innerHTML = `<strong>${actividad.nombre}</strong><br>
                        Fecha límite: ${actividad.fecha}`;

      const estado = document.createElement("div");
      estado.classList.add("estado");


      //Convierte la fecha en el fórmato que estamos usando
      const hoy = new Date().toISOString().split("T")[0];

      if (actividad.nota === null) {
        if (actividad.fecha < hoy) {
          estado.textContent = "No entregado";
          estado.classList.add("reprobada");
        } else {
          estado.textContent = "Sin entregar";
          estado.classList.add("sin-entregar");
        }
      } else if (actividad.nota > 75) {
        estado.textContent = "Aprobada";
        estado.classList.add("aprobada");
      } else {
        estado.textContent = "Reprobada";
        estado.classList.add("reprobada");
      }

      li.appendChild(info);
      li.appendChild(estado);
      contenedor.appendChild(li);
    });
  }

});


function cerrarSesion() {
  alert("Has cerrado sesión");
  window.location.href = "index.html";
}

function volverAClases() {
  window.location.href = "/clases.html";
}

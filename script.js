document.addEventListener("DOMContentLoaded", () => {
    // Modo oscuro
    const btnModoOscuro = document.getElementById("modoOscuro");
    btnModoOscuro.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    // Validación de formulario
    document.getElementById("contactoForm").addEventListener("submit", function (e) {
      e.preventDefault();
      let valido = true;
  
      let nombre = document.getElementById("nombre");
      let email = document.getElementById("email");
      let mensaje = document.getElementById("mensaje");
  
      document.getElementById("errorNombre").classList.toggle("d-none", nombre.value.trim() !== "");
      document.getElementById("errorEmail").classList.toggle("d-none", email.value.includes("@"));
      document.getElementById("errorMensaje").classList.toggle("d-none", mensaje.value.trim() !== "");
  
      valido = nombre.value.trim() !== "" && email.value.includes("@") && mensaje.value.trim() !== "";
  
      if (valido) {
        alert("Mensaje enviado con éxito.");
      }
    });
  
    // Chatbot básico
    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotBox = document.getElementById("chatbotBox");
    const chatbotMessages = document.getElementById("chatbotMessages");
    const chatbotInput = document.getElementById("chatbotInput");
    const chatbotSend = document.getElementById("chatbotSend");
  
    chatbotToggle.addEventListener("click", () => chatbotBox.classList.toggle("d-none"));
  
    chatbotSend.addEventListener("click", () => {
      const msg = chatbotInput.value.trim();
      if (msg) {
        chatbotMessages.innerHTML += `<p><strong>Tú:</strong> ${msg}</p>`;
        chatbotMessages.innerHTML += `<p><strong>Bot:</strong> Gracias por tu consulta, te responderemos pronto.</p>`;
        chatbotInput.value = "";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotBox = document.getElementById("chatbotBox");
    const chatbotClose = document.getElementById("chatbotClose");
    const chatbotMessages = document.getElementById("chatbotMessages");
    const chatbotInput = document.getElementById("chatbotInput");
    const chatbotSend = document.getElementById("chatbotSend");
    const quickButtons = document.querySelectorAll(".quick-btn");
  
    // Mensajes predefinidos del chatbot
    const respuestas = {
      "¿Cuáles son tus servicios?": "Ofrecemos contabilidad, auditoría, declaración de impuestos y asesoría financiera.",
      "¿Cuánto cuesta?": "Nuestros planes varían según tus necesidades. Contáctanos para una cotización personalizada.",
      "¿Cómo te contacto?": "Puedes enviarnos un correo a contacto@contabilidad.com o llamarnos al +52 123 456 7890.",
      "default": "Lo siento, no entendí tu pregunta. Puedes intentar otra consulta."
    };
  
    // Mostrar u ocultar el chatbot
    chatbotToggle.addEventListener("click", () => {
      chatbotBox.classList.toggle("d-none");
    });
  
    chatbotClose.addEventListener("click", () => {
      chatbotBox.classList.add("d-none");
    });
  
    // Enviar mensaje en el chat
    function enviarMensaje(mensaje) {
      if (mensaje.trim() === "") return;
  
      // Agregar mensaje del usuario
      chatbotMessages.innerHTML += `<p><strong>Tú:</strong> ${mensaje}</p>`;
  
      // Respuesta automática
      setTimeout(() => {
        const respuesta = respuestas[mensaje] || respuestas["default"];
        chatbotMessages.innerHTML += `<p><strong>Bot:</strong> ${respuesta}</p>`;
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 500);
  
      chatbotInput.value = "";
    }
  
    chatbotSend.addEventListener("click", () => enviarMensaje(chatbotInput.value));
  
    chatbotInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") enviarMensaje(chatbotInput.value);
    });
  
    // Respuestas rápidas
    quickButtons.forEach(button => {
      button.addEventListener("click", () => enviarMensaje(button.innerText));
    });
  });
    

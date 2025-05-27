const texts = [
    "Revive recuerdos, siente su presencia.",
    "Conecta con quienes nunca se fueron.",
    "Una conversación eterna más allá del tiempo.",
    "Tu vínculo con el pasado, hoy y siempre."
  ];

  const typingSpeed = 100;  // ms por letra
  const erasingSpeed = 50;  // ms por letra para borrar
  const delayBetweenTexts = 1500; // pausa entre textos

  const typeElement = document.querySelector(".type");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      // Escribiendo texto
      typeElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        // Texto completo escrito, espera y luego borra
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
      } else {
        setTimeout(type, typingSpeed);
      }
    } else {
      // Borrando texto
      typeElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // Texto borrado, pasa al siguiente
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, erasingSpeed);
      }
    }
  }

  // Inicia la animación
  type();
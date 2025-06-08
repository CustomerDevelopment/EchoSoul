document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("videoElement");

    // Espera a que esté listo para reproducir
    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 50; // Empieza desde el segundo 10
    });
  });
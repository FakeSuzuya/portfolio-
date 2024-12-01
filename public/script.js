document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
  
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 2000); // Temps de chargement avant disparition
  });
  
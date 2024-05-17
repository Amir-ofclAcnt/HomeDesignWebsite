document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetSectionId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        targetSection.scrollIntoView();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var skillsSection = document.getElementById("skills");
    toggleButton.addEventListener("click", function () {
        if (skillsSection.classList.contains("hidden")) {
            skillsSection.classList.remove("hidden");
            toggleButton.innerText = "Hide Skills";
        }
        else {
            skillsSection.classList.add("hidden");
            toggleButton.innerText = "Show Skills";
        }
    });
});

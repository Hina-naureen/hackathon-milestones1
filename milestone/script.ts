document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills") as HTMLElement;

    toggleButton.addEventListener("click", () => {
        if (skillsSection.classList.contains("hidden")) {
            skillsSection.classList.remove("hidden");
            toggleButton.innerText = "Hide Skills";
        } else {
            skillsSection.classList.add("hidden");
            toggleButton.innerText = "Show Skills";
        }
    });
});
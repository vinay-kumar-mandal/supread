document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;

    // Check LocalStorage for saved theme
    const savedTheme = localStorage.getItem("supread-theme") || "light";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateButtonText(savedTheme);

    // Toggle Theme on Click
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("supread-theme", newTheme);
        
        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        if (theme === "dark") {
            themeToggleBtn.innerHTML = "☀️ Light";
        } else {
            themeToggleBtn.innerHTML = "🌙 Dark";
        }
    }
});
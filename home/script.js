document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("langSlider");
    let isDown = false;
    let startX;
    let scrollLeft;

    // जब माउस क्लिक किया जाए
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.style.cursor = "grabbing"; // कर्सर का आइकॉन बदल जाएगा
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    // जब माउस हटा लिया जाए
    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.style.cursor = "grab";
    });

    // जब क्लिक छोड़ दिया जाए
    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.style.cursor = "grab";
    });

    // जब माउस मूव किया जाए (ड्रैग)
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // '2' स्क्रॉल की स्पीड है
        slider.scrollLeft = scrollLeft - walk;
    });
});
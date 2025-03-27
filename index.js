let timeout = setTimeout(() => {
    document.title = "Lost?";
}, 10000);

document.addEventListener("mousemove", () => {
    clearTimeout(timeout); // Reset timer if he moves the mouse
    document.title = "Homepage";
    timeout = setTimeout(() => {
        document.title = "Lost?";
    }, 10000);
});

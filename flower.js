// Click anywhere to create a heart
document.querySelector(".garden").addEventListener("click", function (event) {

    // Button par click ho to bhi heart create hoga
    const heart = document.createElement("div");

    heart.className = "click-heart";
    heart.innerHTML = "♥";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    this.appendChild(heart);

    // 1 second baad heart remove
    setTimeout(function () {
        heart.remove();
    }, 1000);
});
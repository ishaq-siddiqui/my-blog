document.addEventListener("DOMContentLoaded", function() {
    let viewCount = localStorage.getItem("pageViews") || 0;
    viewCount++;
    localStorage.setItem("pageViews", viewCount);
    document.getElementById("viewCount").textContent = viewCount;
});

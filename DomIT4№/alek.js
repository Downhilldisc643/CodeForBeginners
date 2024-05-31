function toggleNightMode() {
    let body = document.body;

    if (body.classList.contains("night-mode")) {
        body.classList.remove("night-mode");
        body.style.backgroundColor = "#e5e4e4";
        body.style.color = "black";
        document.getElementById("button").textContent = "Night Mode";
    }   
    
    else {
        body.classList.add("night-mode");
        body.style.backgroundColor = "#212121";
        body.style.color = "white";
        document.getElementById("button").textContent = "Light Mode";
    }
}

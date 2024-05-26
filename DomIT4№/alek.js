function toggleNightMode() {
    let body = document.body;

    if (body.classList.contains("night-mode")) {
        body.classList.remove("night-mode");
        body.style.backgroundColor = "white";
        body.style.color = "black";
        document.getElementById("button").textContent = "Night Mode";
    }   
    
    else {
        body.classList.add("night-mode");
        body.style.backgroundColor = "black";
        body.style.color = "white";
        document.getElementById("button").textContent = "Light Mode";
    }
}

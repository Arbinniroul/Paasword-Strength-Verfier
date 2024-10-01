var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (pass.value.length > 0 && pass.value.length < 4) {
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
        strength.innerHTML = "weak";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
        strength.innerHTML = "medium";
    } else if (pass.value.length >= 8) {
        pass.style.borderColor = "#26D725";
        msg.style.color = "#26D725";
        strength.innerHTML = "strong";
    }
});

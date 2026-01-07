function birthdayCardinp() {
    document.getElementById("inputBox").style.display = "flex";
    document.getElementById("card").style.display = "none";
}

function createCard() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;

    if (name === "" || dob === "") {
        alert("Please fill all fields");
        return;
    }

    // 🔴 inputs + button hide
    document.getElementById("inputBox").style.display = "none";

    // 🟢 card show
    document.getElementById("card").style.display = "flex";

    document.getElementById("cardGreeting").innerText =
        `🎉 Happy Birthday ${name}! 🎂`;

    document.getElementById("cardDate").innerText =
        `Born on: ${dob}`;
}


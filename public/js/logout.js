"use strict"
var logBtn = document.querySelector(".logout")
console.log(logBtn)
logBtn.addEventListener("click", async () => {
    var response = await fetch('/signin', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
    if(response.status === "ok"){
        window.location.href = "/signin"
    }
})
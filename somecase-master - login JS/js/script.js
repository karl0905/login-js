function check() {
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value
    if (login == "karl" && password == "karl") {
        alert("Rigtigt login, du viderestilles...")
        window.location.href="hemmeligside.html"
    } else {
        alert("Forkert brugernavn eller adgangskode. Prøv igen")
    }
}
function Validar() {
    let password = document.getElementById("password").value;
    alert (password.lenght);
    
    let lowercase = '/[a-z]/'.test(password);
    let uppercase = '/[A-Z]'.test(password);   
    let number = '/\d/'.test(password);
    let specialchar = '/[\W_]/'.test(password);

    if (password.lenght < 8) {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    } else {
        Swal.fire({
            title: "Contraseña correcta",
            text: "That thing is still around?",
            icon: "question"
        });
    }    
}

const password = document.getElementById("password")

toggle_password.addEventListener("click", () => {
    const tipo_elemento = password.type === "password" ? "text" : "password";
    password.type = tipo_elemento;
    
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
})
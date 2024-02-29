const passwords = document.querySelectorAll('input[type="password"].textbox')
var pass = document.querySelector('#pass')
var repass = document.querySelector('#repass')
passwords.forEach(password => {
    password.addEventListener("change", e =>{
        if(pass.value === ""){
            pass.classList.remove('error');
            repass.classList.remove('error');
            pass.classList.add("empty")
            createErrorText()
            
            return
        }
        if(repass.value === ""){
            pass.classList.remove('error');
            repass.classList.remove('error');
            repass.classList.add("empty")
            createErrorText()
            return
        }
        if(pass.value !== repass.value){
            e.target.classList.add('error');
            pass.classList.remove('empty');
            repass.classList.remove('empty');
        }
        else{
            pass.classList.remove('error');
            repass.classList.remove('error');
            pass.classList.remove('empty');
            repass.classList.remove('empty');
        }
        createErrorText()
    })
});
const createErrorText = () => {
    const container = document.querySelector(".error-container")
    var message;
    if(pass.classList.contains("empty") || repass.classList.contains("empty")){
        message = "* One field is empty."
    }
    else if(pass.classList.contains("error") || repass.classList.contains("error")){
        message = "* The passwords doesn't match"
    }
    else{
        container.innerHTML = ""
        return
    }
    container.innerHTML = `<p class="error-text">${message}</p>`
}
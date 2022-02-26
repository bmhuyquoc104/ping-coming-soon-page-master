const form = document.querySelector(".form");
console.log(form);
const email = document.querySelector("#email");
const error = document.querySelector(".error");
console.log(email);
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener("submit", (e)=>{
    email.innerText = "";
    form.classList.remove("invalid")

    if (email.value === ""){
        form.classList.add("invalid")
        error.innerText = "Email address cannot be empty";
        e.preventDefault();
    }

    else if(!email.value.match(mailformat)){
        form.classList.add("invalid")
        error.innerText = "Please provide a valid email address";
        e.preventDefault();
    }
    
})
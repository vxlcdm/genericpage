function closeLogin() {
     window.location.href="index.html"
}

const redirectSignup=()=>{
    window.location.href="register.html"
}











function togglePassword() {
    let passwordField = document.getElementById("pass");
    let eyeIcon = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

















const shakebox= document.getElementById('shakebox')
const shakebox1= document.getElementById('shakebox1')
const error_message = document.getElementById('error-message')
const error_message1 = document.getElementById('error-message1')
let errors = [];
let errors1=[];

const x_email = document.getElementById('email');
    const x_pass = document.getElementById('pass');
    inputFields=[x_email,x_pass];

document.getElementById("login-form").addEventListener("submit", function(event){
    // let errors = []
    errors=[];
    errors1=[];
    // alert("yahooo");
    event.preventDefault();
    // console.log("here");
    
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('pass').value;


    if (email.trim() === "") {
        errors.push("Credentials cannot be empty");
        error_message.innerText = errors.join(". ");
    
        shakebox.classList.add("incorrect");
        shakebox.addEventListener("animationend", () => {
            shakebox.classList.remove("incorrect");
    });
    }

    if (pass.trim() === "") {
        errors1.push("Password cannot be empty");
        error_message1.innerText = errors1.join(". ");
    
      shakebox1.classList.add("incorrect");
      shakebox1.addEventListener("animationend", () => {
        shakebox1.classList.remove("incorrect");
    });
    }

    if(errors.length>0)
    {
        return;
    }
    if(errors1.length>0)
        {
            return;
        }
    






 

    const user=localStorage.getItem(email);
    // console.log(email);
    // console.log(pass);

// console.log("came here");


    if(user)
    {
        
        
        const parseduser= JSON.parse(user);
        if(parseduser.password === pass)
        {
            localStorage.setItem("user", JSON.stringify(parseduser));
            window.location.href= "index.html";
        }
        else{
            // alert("INCORRECT DETSALS");
            errors1.push("Wrong credentials");
            error_message1.innerText = errors1.join(". ");
        }
    }else{
        
        // alert("USER NOT FOUND");
        errors.push("User not found, please signup");
            error_message.innerText = errors.join(". ");
    }
    
    });



    
function abc(){
   
        x_email.addEventListener('input', () => {
              
             
            error_message.innerText = '';
            
             
         })
 
          
  };
abc();
function xyz()
{
    
        x_pass.addEventListener('input', () => {
              
            error_message1.innerText = '';
             
         })
  
}
        
xyz();




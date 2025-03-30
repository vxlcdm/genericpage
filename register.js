
const error_message = document.getElementById('error-message')
let errors = []
console.log();


document.getElementById("username-check-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        errors=[];
        
        const uname=document.getElementById("username").value;
        

        if(uname.trim()==="")
        {
            // alert('enter a username first');
            errors.push("Enter a username first")
            error_message.innerText = errors.join(". ");

            return;
        }
        
        if (uname.includes(" ")) {
            errors.push("Username cannot contain spaces");
            error_message.innerText = errors.join(". ");

            return;
        }
        if (uname.length < 4) {
            errors.push("Username must be at least 4 characters long");
            error_message.innerText = errors.join(". ");

            return;
        }
        if (!/^[a-zA-Z0-9]+$/.test(uname)) {
            errors.push("Username can only contain letters and numbers");
            error_message.innerText = errors.join(". ");

            return;
        }

        if (uname.length > 20) {
            errors.push("Username cannot be longer than 20 characters");
            error_message.innerText = errors.join(". ");

            return;
        }


        const usernamexists = localStorage.getItem(uname);
        if(usernamexists )
        {   console.log(usernamexists);
        
            const parsedusername= JSON.parse(usernamexists)
            if(parsedusername.username === uname)
            {
                console.log(parsedusername);
                console.log(parsedusername.username);

                

                // alert("username alrady taken try different");


                document.getElementById("out-of-box1").style.display="none";
                document.getElementById("out-of-box").style.display="block";


    const x = document.getElementById("out-of-box");

                setTimeout(() => {
          
                    x.style.display = 'none'; 
                }, 1000);  


                        return;
            }
        }
        else{
            document.getElementById("out-of-box").style.display="none";
            document.getElementById("out-of-box1").style.display="block";

            const x = document.getElementById("out-of-box1") ;

            setTimeout(() => {
      
                x.style.display = 'none'; 
            }, 1000);  

        }

}
);



// function hideElement() {
// // console.log(x, "HEHEHEHHEHE");
// }
// hideElement();
const x_fname = document.getElementById("full-name");
const x_uname = document.getElementById("username");
const x_email = document.getElementById("email");
const x_phno = document.getElementById("phone-number");
const x_pass = document.getElementById("password");
const x_pass1 = document.getElementById("password1");
const x_country = document.getElementById("countryCode");
// const x_gender=document.getElementById("")

 

const inputFields = [x_fname, x_uname, x_email, x_phno, x_pass, x_pass1, x_country];


document.getElementById('register-button').addEventListener('click',
   async function(event){
        event.preventDefault();
        errors=[];
         
        let error_message = document.getElementById("error-message");



        const fname=document.getElementById("full-name").value.trim().replace(/\s+/g, " ");;;
        const uname=document.getElementById("username").value.trim();;
        const email=document.getElementById("email").value.trim();;
        const phno=document.getElementById("phone-number").value.trim();;
        const pass=document.getElementById('password').value;
        const pass1=document.getElementById('password1').value;
        const country=document.getElementById("countryCode").value;
        

        // console.log(x_fname);
        



        // if(fname.trim()=== "" ||  uname.trim()==="" ||  email.trim()==="" || phno.trim()===""   ||   !email.includes('@')  ||  !email.includes('.com')   )
        // {
        //     // alert("enter correct details")
            // errors.push('Full name is required');
            // error_message.innerText  = errors.join(". ")
         
        //     return;
        // }
 

if (fname.trim() === "") {
    errors.push("Full name is required");
    error_message.innerText = errors.join(". ");
    x_fname.parentElement.classList.add("incorrect");
    x_fname.parentElement.addEventListener("animationend", () => {
        x_fname.parentElement.classList.remove("incorrect");
    });
    // console.log(x_fname);
    // console.log(x_fname.parentElement);
    
}
if (/\d/.test(fname)) {  
    errors.push("Name cannot contain numbers");  
    error_message.innerText = errors.join(". ");
     
    return;
}
      

if (uname.trim() === "") {
    errors.push("Username cannot be empty");
    error_message.innerText = errors.join(". ");

    x_uname.parentElement.parentElement.classList.add("incorrect");
x_uname.parentElement.parentElement.addEventListener("animationend", () => {
    x_uname.parentElement.parentElement.classList.remove("incorrect");
});








 

    if (email.trim() === "") {

        {
        errors.push("Email is required");
        error_message.innerText = errors.join(". ");

        x_email.parentElement.classList.add("incorrect");
    x_email.parentElement.addEventListener("animationend", () => {
        x_email.parentElement.classList.remove("incorrect");
    });
    }  
   

}




if (phno.trim() === "") {
    errors.push("Phone number is required");
    error_message.innerText = errors.join(". ");

    x_phno.parentElement.parentElement.classList.add("incorrect");
x_phno.parentElement.parentElement.addEventListener("animationend", () => {
    x_phno.parentElement.parentElement.classList.remove("incorrect");
});
}



if (x_pass.value.trim() === "" ) {
    errors.push("Password is required");
    error_message.innerText = errors.join(". ");

    x_pass.parentElement.classList.add("incorrect");
    x_pass.parentElement.addEventListener("animationend", () => {
        x_pass.parentElement.classList.remove("incorrect");
    });
}

if (x_pass1.value.trim() === "" ) {
    errors.push("Re-entered password is required");
    error_message.innerText = errors.join(". ");

    x_pass1.parentElement.classList.add("incorrect");
    x_pass1.parentElement.addEventListener("animationend", () => {
        x_pass1.parentElement.classList.remove("incorrect");
    });
     return;
}


 


}
if (uname.includes(" ")) {
    errors.push("Username cannot contain spaces.");
    error_message.innerText = errors.join(". ");

    return;
}
if (uname.length < 4) {
    errors.push("Username must be at least 4 characters long.");
    error_message.innerText = errors.join(". ");

    return;
}
if (!/^[a-zA-Z0-9]+$/.test(uname)) {
    errors.push("Username can only contain letters and numbers.");
    error_message.innerText = errors.join(". ");

    return;
}

if (uname.length > 20) {
    errors.push("Username cannot be longer than 20 characters.");
    error_message.innerText = errors.join(". ");

    return;
}





// console.log(email, "emaillogkiya");

if(email.trim()==="")
{
    errors.push("Email is required");
    error_message.innerText = errors.join(". ");
}

        if (!email.includes("@")) {
            errors.push("Email must contain '@'");
            error_message.innerText = errors.join(". ");

            return;


        }
        const specialCharRegex = /[^a-zA-Z0-9@._-]/; 
        if (specialCharRegex.test(email)) {
            errors.push("Email must not contain special characters except '@', '.dot', '_dash', and '-hyphen'");
            error_message.innerText = errors.join(". ");

            return;
        }
    
        if (!email.includes(".")) {
            errors.push("Email must contain a '.' (dot)");
            error_message.innerText = errors.join(". ");

            return;
        }
    
        if (!email.includes(".com") && !email.includes(".net") && !email.includes(".org")) {
            errors.push("Email must have a valid domain like .com, .net, or .org");
            error_message.innerText = errors.join(". ");

            return;
        }
        if (email.includes("@.") || email.includes(".@")) {
            errors.push("Email must have a valid name before and after '@' and '.'");
            error_message.innerText = errors.join(". ");

            return;
        }
        

        if (email.startsWith("@") || email.startsWith(".")) {
            errors.push("Email cannot start with '@' or a '.'");
            error_message.innerText = errors.join(". ");

            return;
        }
    
        if (email.endsWith("@") || email.endsWith(".")) {
            errors.push("Email cannot end with '@' or a '.'");
            error_message.innerText = errors.join(". ");

            return;
        }
    
        if (email.indexOf("@") > email.lastIndexOf(".")) {
            errors.push("The '@' should come before the last '.' in an email");
            error_message.innerText = errors.join(". ");

            return;
        }
    
        if (email.split("@").length !== 2) {
            errors.push("Email must contain only one '@' symbol");
            error_message.innerText = errors.join(". ");

            return;
        }


    




if(country==="India")
    {
     
    }
    else{
        errors.push("Our services are limited to India only right now");
    error_message.innerText = errors.join(". ");

        // alert("Our services are limited in India only right now");
        return;
         
    }
    if(  phno.length === 10 && !isNaN(phno)   )
    {   
        const firstDigit = phno.toString()[0];
        if(    firstDigit  >5 && firstDigit <10  )
        {

        }
        else{
            // alert('incorrect monbile number');
        errors.push("Phone number must be Indian number.");
    error_message.innerText = errors.join(". ");

            return;
              
        }

    }
    else
    {
        // alert('incorrect monbile number');
        errors.push("Phone number must be 10digits in length.");
    error_message.innerText = errors.join(". ");

        return;
        
        
    }


    if (errors.length > 0) {
        error_message.innerText = errors.join(". ");
        console.log("IDHAHHEHEHEHEHEHOH");
        
        return;
    
    }
    
    









if (pass.length < 8) {
    errors.push("Password must be at least 8 characters long.");
    error_message.innerText = errors.join(". ");

    return;
}

const weakPasswords = ["password", "12345678", "qwerty", "iloveyou", "admin"];
if (weakPasswords.includes(pass.toLowerCase())) {
    errors.push("Password is too common. Choose a stronger one.");
    error_message.innerText = errors.join(". ");

    return;
}

if (!/[A-Z]/.test(pass)) {
    errors.push("Password must contain at least one uppercase letter.");
    error_message.innerText = errors.join(". ");

    return;
}

if (!/[a-z]/.test(pass)) {
    errors.push("Password must contain at least one lowercase letter.");
    error_message.innerText = errors.join(". ");

    return;
}

if (!/[0-9]/.test(pass)) {
    errors.push("Password must contain at least one number.");
    error_message.innerText = errors.join(". ");

    return;
}

if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass)) {
    errors.push("Password must contain at least one special character.");
    error_message.innerText = errors.join(". ");

    return;
}

if (/\s/.test(pass)) {
    errors.push("Password cannot contain spaces.");
    error_message.innerText = errors.join(". ");

    return;
}


 

if(pass!==pass1)
    {

        // alert("password not matchig");
        x_pass.classList.add("incorrect");
        x_pass.addEventListener("animationend", () => {
            x_pass.classList.remove("incorrect");
        });

        x_pass1.classList.add("incorrect");
    x_pass1.addEventListener("animationend", () => {
        x_pass1.classList.remove("incorrect");
    });
        errors.push("Password mismatch, enter correct passwords");
        error_message.innerText = errors.join(". ");

         return;

    }


 




       
      
                
        



//////////////////////////////////////////
// CHEKCING IS RECORDS EXSITS 
///////////////////////////////////////////

//username check
        const usernamexists = localStorage.getItem(uname);
        if(usernamexists)
        {
            
            const parsedusername= JSON.parse(usernamexists)
            if(parsedusername.username === uname)
            {
        errors.push(`An account with ${ parsedusername.username } username already exists.`);
               
                        
            }
        }
        if (errors.length > 0) {
            error_message.innerText = errors.join(". ");
            console.log("IDHAHHEUSERNAMEEEEEH");
            
            return;
        
        }
        
 
//email check
            const emailexists = localStorage.getItem(email);
        if(emailexists)
        {
            const parsedemail= JSON.parse(emailexists)
            if(parsedemail.email === email)
            {
        errors.push(`An account with ${parsedemail.email} email already exists.`);

                // alert(`an account with ${parsedemail.email}    
                    //  email exists, try logging in`);
                       
            }
        }

        if (errors.length > 0) {
            error_message.innerText = errors.join(". ");
            console.log("IDHEMAILGYAAAEH");
            
            return;
        
        }

//mobile number check

                   const mobileexists = localStorage.getItem(phno);
        if(mobileexists)
        {
            
            const parsedmobile= JSON.parse(mobileexists)
            if(parsedmobile.mobile === phno)
             {
                    // alert(`an account with  same   
                    //      mobile number exists, try logging in`);
                    console.log(mobileexists.mobile);
                    console.log(phno);
                    
        errors.push(`An account with  ${parsedmobile.mobile} already exists`);
            

       
            }
        }
        if (errors.length > 0) {
            error_message.innerText = errors.join(". ");
            console.log("IDHEOBILEELELBLOLEBOLBIEBOLBIEEH");
            
            return;
        
        }

        const genderCheckVisibility= document.getElementById("genderCheck");
        genderCheckVisibility.style.display="block";
        console.log("HERE11111");


        const closeBtnGender = document.getElementById("close-btn-next");
        var selectedGender ;
        console.log("HERE222222222");
        


        async function waitForGenderSelection() {
            return new Promise((resolve) => {

        closeBtnGender.addEventListener("click",    () => {
            console.log("HER333333333333");
            
            genderCheckVisibility.style.display = "none";
            selectedGender = document.querySelector('input[name="xgender"]:checked');
            if (selectedGender) {
                // alert("Selected Gender: " + selectedGender.value);
                resolve(selectedGender.value);
                
            } else {
                alert("Please select a gender.");
            }
        });
        });}

        










async function registerUser() {
    console.log("Waiting for gender selection...");
    const selectedGenderValue = await waitForGenderSelection(); // ✅ Execution halts here
    console.log("Selected Gender:", selectedGenderValue);
        const user={
            name: fname,
            username:uname,
            password:pass,
            mobile: phno,
            email: email,
            gender:selectedGenderValue

        }

        localStorage.setItem(email, JSON.stringify(user));
        localStorage.setItem(phno, JSON.stringify(user));
        localStorage.setItem(uname, JSON.stringify(user));
       
     
      


        const successPopup = document.getElementById("successPopup");
        // alert("registration successful, now login");
        successPopup.style.display = "block";
     

    }

    registerUser();
    console.log(registerUser());
}
);
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
    successPopup.style.display = "none";
    window.location.href='login.html';
});


function abc(){
inputFields.forEach(input => {
    input.addEventListener('input', () => {
      
     
        error_message.innerText = ''
     
    })
  })
  
};
abc();






function closeSignup() {
    window.location.href="profile.html"
}

const redirectLogin=()=>{
   window.location.href="login.html"
}

function togglePassword() {
    let passwordField = document.getElementById("password");
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

function togglePassword1() {
    let passwordField1 = document.getElementById("password1");
    let eyeIcon = document.querySelector(".toggle-password1");
    if (passwordField1.type === "password") {
        passwordField1.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField1.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
 
const navTogglernoVice = document.querySelector('.nav-toggler-vxlcdm');
const navMenuXsd = document.querySelector('.site-navbar-vxlcdm ul');
const navLinksspeCial = document.querySelectorAll('.site-navbar-vxlcdm a');
const nameofuser=document.querySelector(".name-of-user-profile");
const userxemail=document.querySelector(".actual-email-of-theprofile-user");
const userxphone=document.querySelector(".actual-phone-of-theprofile-user");
const userxlocation=document.querySelector(".actual-location-of-theprofile-user")
const userxtime=document.querySelector(".actual-timezonex-of-theprofile-user");
const userxname=document.querySelector(".name-of0username-ofprofile-user");
const imageProfileuser=document.querySelector(".imag-of-rprofilep");



allEventListners();

 
function allEventListners() {
  
  navTogglernoVice.addEventListener('click', togglerClick);
 
  navLinksspeCial.forEach( elem => elem.addEventListener('click', navLinkClick));
}

 
function togglerClick() {
  navTogglernoVice.classList.toggle('toggler-open');
  navMenuXsd.classList.toggle('open');
}

 
function navLinkClick() {
  if(navMenuXsd.classList.contains('open')) {
    navTogglernoVice.click();
  }
}

const flag=document.querySelector(".flag-icon");
const countryFName=document.querySelector(".country-para-of-profile-user");
console.log(flag);
const countryFlags = ["us", "fr", "de", "in", "gb", "cn", "br", "jp", "ca", "au", "it", "es", "ru", "mx", "kr", "za", "ar", "sa", "nl", "se", "ch", "be", "pt", "tr", "id", "th", "ph", "vn", "my", "eg", "ua", "pk", "pl"];
const countryNames = [
    "United States", "France", "Germany", "India", "United Kingdom", "China", "Brazil", "Japan", 
    "Canada", "Australia", "Italy", "Spain", "Russia", "Mexico", "South Korea", "South Africa", 
    "Argentina", "Saudi Arabia", "Netherlands", "Sweden", "Switzerland", "Belgium", "Portugal", 
    "Turkey", "Indonesia", "Thailand", "Philippines", "Vietnam", "Malaysia", "Egypt", "Ukraine", 
    "Pakistan", "Poland"
];
const countriesWithCapitals = [
    { country: "United States", capital: "Washington, D.C." },
    { country: "France", capital: "Paris" },
    { country: "Germany", capital: "Berlin" },
    { country: "India", capital: "New Delhi" },
    { country: "United Kingdom", capital: "London" },
    { country: "China", capital: "Beijing" },
    { country: "Brazil", capital: "Brasília" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Canada", capital: "Ottawa" },
    { country: "Australia", capital: "Canberra" },
    { country: "Italy", capital: "Rome" },
    { country: "Spain", capital: "Madrid" },
    { country: "Russia", capital: "Moscow" },
    { country: "Mexico", capital: "Mexico City" },
    { country: "South Korea", capital: "Seoul" },
    { country: "South Africa", capital: "Pretoria" },
    { country: "Argentina", capital: "Buenos Aires" },
    { country: "Saudi Arabia", capital: "Riyadh" },
    { country: "Netherlands", capital: "Amsterdam" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Switzerland", capital: "Bern" },
    { country: "Belgium", capital: "Brussels" },
    { country: "Portugal", capital: "Lisbon" },
    { country: "Turkey", capital: "Ankara" },
    { country: "Indonesia", capital: "Jakarta" },
    { country: "Thailand", capital: "Bangkok" },
    { country: "Philippines", capital: "Manila" },
    { country: "Vietnam", capital: "Hanoi" },
    { country: "Malaysia", capital: "Kuala Lumpur" },
    { country: "Egypt", capital: "Cairo" },
    { country: "Ukraine", capital: "Kyiv" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Poland", capital: "Warsaw" }
];
const timezones = [
    "Pacific Daylight Time (GMT-7)",
    "Eastern Standard Time (GMT-5)",
    "Central European Time (GMT+1)",
    "Greenwich Mean Time (GMT+0)",
    "Indian Standard Time (GMT+5:30)",
    "Japan Standard Time (GMT+9)",
    "China Standard Time (GMT+8)",
    "Australian Eastern Standard Time (GMT+10)",
    "Mountain Standard Time (GMT-7)",
    "Alaska Standard Time (GMT-9)",
    "Hawaii-Aleutian Standard Time (GMT-10)",
    "Argentina Standard Time (GMT-3)",
    "Brazil Standard Time (GMT-3)",
    "South Africa Standard Time (GMT+2)",
    "Moscow Standard Time (GMT+3)",
    "New Zealand Standard Time (GMT+12)",
    "Arabian Standard Time (GMT+3)",
    "Korea Standard Time (GMT+9)",
    "Central Standard Time (GMT-6)",
    "Atlantic Standard Time (GMT-4)",
    "Western European Time (GMT+0)",
    "Eastern European Time (GMT+2)",
    "West Africa Time (GMT+1)",
    "East Africa Time (GMT+3)",
    "Singapore Standard Time (GMT+8)",
    "Philippine Standard Time (GMT+8)",
    "Venezuela Standard Time (GMT-4:30)",
    "Nepal Time (GMT+5:45)",
    "Pakistan Standard Time (GMT+5)",
    "Bangladesh Standard Time (GMT+6)",
    "Turkey Time (GMT+3)",
    "Fiji Standard Time (GMT+12)"
];



const cf= countryFlags.length-1;
const cn=countryNames.length-1;
console.log(cf);
console.log(cn);

const shuffleCnCf=()=>{
                     
    return  Math.floor(Math.random()*cf);
    
    
}
raondomNum=shuffleCnCf();













const profileSection=document.getElementById("absparntsetonformax");
const allSection=document.querySelector(".yahasebakikibodykacontentshuruhogasothatIcanhidelater");


const switchDisplay=()=>{
if(profileSection.classList.contains("toggle"))
{
    profileSection.classList.remove("toggle");
    allSection.classList.remove("toggle");
}
else{

}

}

const showDisplay=()=>{
    if(profileSection.classList.contains("toggle"))
    {
    }
    else{
        
        profileSection.classList.add("toggle");
        allSection.classList.add("toggle");
    
    }
    
}
const profileLiDisplay=document.querySelector(".profilieLI");
const loginLi=document.querySelector(".liitemloginregs");
const regLi=document.querySelector(".liitemloginregs1")



// const hideLiItem= ()=>{

//     profileLiDisplay.classList.add("hideli")

// }
// const showLiItem= ()=>{

//     profileLiDisplay.classList.remove("hideli")

// }

const hideCred=()=>
{
    loginLi.classList.add("hide");
    regLi.classList.add("hide");
    profileLiDisplay.classList.add("toggle");
}



















































const x = document.getElementById("logout-button");

 
const  user = localStorage.getItem("user");




let getGender;

if(user.trim()!=="")
{
    let parseduser= JSON.parse(user);
    getGender=parseduser.gender;
    // document.getElementById("welcome-message").innerHTML= `Hello, ${parseduser.name.toUpperCase()}`;
    
    // nameTitle.innerHTML=parseduser.name.toUpperCase();

    // email.innerHTML=parseduser.email;
    // phoneNumber.innerHTML=parseduser.mobile;
    // userusername.innerHTML=parseduser.username;

    // profession.innerHTML=generateProfession();
    // education.innerHTML=generateEducation();
    // x.style.display = "block";
    nameofuser.innerHTML=parseduser.name.toUpperCase();
    userxemail.innerHTML=parseduser.email;
    userxphone.innerHTML=parseduser.mobile.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");;
    userxlocation.innerHTML=countriesWithCapitals[raondomNum].capital + ", "+ countriesWithCapitals[raondomNum].country;
    userxtime.innerHTML=timezones[raondomNum];
    countryFName.innerHTML=countryNames[raondomNum];
    userxname.innerHTML=parseduser.username;
       let str="flag-icon-";
           str+=`${countryFlags[raondomNum]}`;
            
           console.log(str);
         
        
        const newElement=document.createElement("span");
        newElement.classList.add("flag-icon" ,str);
        countryFName.prepend(newElement);
        console.log(newElement);
        



    hideCred();
    showDisplay();
     
}

else
{
    
    switchDisplay();


}

document.getElementById('logout-button').addEventListener("click", function(){
    console.log("kuch clkicj hua");
    
    localStorage.removeItem("user");
    window.location.href="index.html";
});








let num=0;
console.log(getGender);
if(num%2==0)
{
    getGender="male";
    num++;
}else{
    getGender="female";
    num++;
}

const ppImg= document.querySelector(".profile_php_to")


async function fetchuserData(){

try {
    const response= await fetch(`https://randomuser.me/api/?gender=${getGender}`);

    if(response.ok)
    {
        const data= await response.json();
        console.log(data.results[0]);
        imageProfileuser.src=data.results[0].picture.large;
    }
    else
    {
        throw new Error("SOMETHING WENT WRONG IN THE API CHECK ASAP");
    }
    
} catch (error) {
    console.error(error);
    
}

};
fetchuserData();











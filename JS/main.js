let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    user.classList.remove('active');

} 

//Navbar
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY >= 0);
});

//Input File
const form = document.querySelector(".form-bingkai"),
fileInput = form.querySelector(".file-folder");

form.addEventListener("click", ()=>{
    fileInput.click();
});
const form1 = document.querySelector(".form-upload"),
fileInput1 = form1.querySelector(".file-upload");

form1.addEventListener("click", ()=>{
    fileInput1.click();
});

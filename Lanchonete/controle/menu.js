
const button = document.querySelectorAll(".btn-menu");

const iconClose = document.querySelector(".btn-close");
const iconList = document.querySelector(".bnt-list");


const MenuMobile = document.querySelector(".navegation-mobile");

iconList.style.display = 'flex';

button.forEach((button) => {
button.addEventListener("click", ()=>{

if(window.getComputedStyle(iconList).display === 'flex' ){

iconClose.style.display='flex';
iconList.style.display = 'none';


MenuMobile.style.transform= "translateX(0vw)";


}else{

iconClose.style.display='none';
iconList.style.display = 'flex';

MenuMobile.style.transform= "translateX(-100vw)";

}


})

});
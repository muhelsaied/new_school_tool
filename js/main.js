let getMenu = false;
let dropBtn = document.querySelector("#navToggle");
let topNav = document.querySelector(".top-nav");
let sideMenu = document.querySelector("#menuList");
let btn_never = document.querySelector(".btn-3d-1");
let container = document.querySelector(".container");


let appearMenu = function(){
if(getMenu === false){
	sideMenu.style.top ="15%";
	getMenu = true;
}else if(getMenu === true){
	sideMenu.style.top ="-200%";
	getMenu = false;
}
}

// change image btn
let slide_1 = document.querySelector(".s-1");
let slide_2 = document.querySelector(".s-2");
let slide_3 = document.querySelector(".s-3");
let slide_4 = document.querySelector(".s-4");
let side_1_appear = function(){
   slide_1.style.opacity = "1";
   slide_2.style.opacity = "0";
   slide_3.style.opacity = "0";
   slide_4.style.opacity = "0";
   slide_1.style.display = "flex";
   slide_2.style.display = "none";
   slide_3.style.display = "none";
   slide_4.style.display = "none";
}
let side_2_appear = function(){
   slide_1.style.opacity = "0";
   slide_2.style.opacity = "1";
   slide_3.style.opacity = "0";
   slide_4.style.opacity = "0";
   slide_1.style.display = "none";
   slide_2.style.display = "flex";
   slide_3.style.display = "none";
   slide_4.style.display = "none";
}
let side_3_appear = function(){
   slide_1.style.opacity = "0";
   slide_2.style.opacity = "0";
   slide_3.style.opacity = "1";
   slide_4.style.opacity = "0";
   slide_1.style.display = "none";
   slide_2.style.display = "none";
   slide_3.style.display = "flex";
   slide_4.style.display = "none";
}
let side_4_appear = function(){
   slide_1.style.opacity = "0";
   slide_2.style.opacity = "0";
   slide_3.style.opacity = "0";
   slide_4.style.opacity = "1";
   slide_1.style.display = "none";
   slide_2.style.display = "none";
   slide_3.style.display = "none";
   slide_4.style.display = "flex";
}



let getMenu = false;
let dropBtn = document.querySelector("#navToggle");
let topNav = document.querySelector(".top-nav");
let sideMenu = document.querySelector("#menuList");
let btn_never = document.querySelector(".btn-3d-1");
let container = document.querySelector(".container");
let appearMenu = function(){
if(getMenu === false){
	sideMenu.style.marginLeft ="0";
	topNav.style.position = "fixed";
	container.style.marginTop = "24%";
	getMenu = true;
}else if(getMenu === true){
	sideMenu.style.marginLeft = "-200%";
	topNav.style.position = "fixed";
	// container.style.marginTop = "0";
	getMenu = false;
}
}

// change image btn
let slide_1 = document.querySelector(".sub-1");
let slide_2 = document.querySelector(".sub-2");
let slide_3 = document.querySelector(".sub-3");
let slide_4 = document.querySelector(".sub-4");
let side_1_appear = function(){
   slide_1.style.opacity = "1";
   slide_2.style.opacity = "0";
   slide_3.style.opacity = "0";
   slide_4.style.opacity = "0";
}
let side_2_appear = function(){
   slide_1.style.opacity = "0";
   slide_2.style.opacity = "1";
   slide_3.style.opacity = "0";
   slide_4.style.opacity = "0";
}
let side_3_appear = function(){
   slide_1.style.opacity = "0";
   slide_2.style.opacity = "0";
   slide_3.style.opacity = "1";
   slide_4.style.opacity = "0";
}
let side_4_appear = function(){
   slide_1.style.opacity = "0";
   slide_2.style.opacity = "0";
   slide_3.style.opacity = "0";
   slide_4.style.opacity = "1";
}
let getMenu = false;
let dropBtn = document.querySelector("#navToggle");
let sideMenu = document.querySelector("#menuList");
let btn_never = document.querySelector(".btn-3d-1");
let appearMenu = function(){
if(getMenu === false){
	sideMenu.style.marginLeft ="0";
	// btn_never.style.position ="unset";
	getMenu = true;
}else if(getMenu === true){
	sideMenu.style.marginLeft = "-200%";
	// btn_never.style.position ="relative";
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
let navIcon = document.getElementById("navIcon");
let sideBar = document.getElementById("sideBar");
let navIconBars = document.getElementById("navIconBars");
let navList = document.getElementById("navList");
let navItem1 = document.getElementById("navItem1");
let navItem2 = document.getElementById("navItem2");


function sideBarActive(){
//moving in icon an sidebar.
 navIcon.classList.toggle('nav__icon-active');
 sideBar.classList.toggle('sidebar-active');

//changing icon.
if(navIconBars.classList.contains('fa-bars')){
 navIconBars.classList.remove('fa-bars');
 navIconBars.classList.add('fa-xmark');

//moving nav items.
navList.classList.add('nav__list-active');

}else{
navIconBars.classList.remove('fa-xmark');
 navIconBars.classList.add('fa-bars');

 //moving nav items.
 navList.classList.remove('nav__list-active');
}
 
}

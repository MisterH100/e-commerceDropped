let navIcon = document.querySelector(".nav__icon");
let sideBar = document.querySelector(".sidebar");
let navIconBars = document.querySelector(".fa-bars");
let navList = document.querySelector(".nav__list");
let navListSideBar = document.querySelector(".nav__list--sidebar");

navIcon.addEventListener('click', () =>{

//moving in icon an sidebar.
 navIcon.classList.toggle('nav__icon-active');
 sideBar.classList.toggle('sidebar-active');

//changing icon.
if(navIconBars.classList.contains('fa-bars')){
 navIconBars.classList.remove('fa-bars');
 navIconBars.classList.add('fa-xmark');

//moving nav items.
 navList.classList.add('nav__list--opacity-active');
 navListSideBar.classList.add('nav__list--sidebar-active');

}else{
 navIconBars.classList.remove('fa-xmark');
 navIconBars.classList.add('fa-bars');

 //moving back nav items.
 navList.classList.remove('nav__list--opacity-active');
 navListSideBar.classList.remove('nav__list--sidebar-active');
}
 
});

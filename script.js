var sidenav=document.getElementById("sidenav")
var menubar=document.getElementById("menubar")
var menu=document.getElementById("menu")

sideNav.style.right== "-250px";

menuBtn.onclick= function(){

  if (sideNav.style.right== "-250px"){
    sideNav.style.right = "0";
    menu.src="https://e-commerce-2.mariumazim.repl.co/images/close.png"

  }
  else{
     sideNav.style.right = "-250px";
     menu.src="https://e-commerce-2.mariumazim.repl.co/images/menu.png"
  }
}

function openImg(){
  var image = document.getElementById('image');
  var source = image.src;
  window.open(source);
}

window.addEventListener("scroll",function(){
  var header = document.querySelector("nav");
    header.classList.toggle("fixed-nav",this.window.scrollY>0);
})
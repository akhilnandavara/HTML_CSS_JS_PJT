function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}  


document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener('click',()=>{
   document.querySelector('.sidebar').classList.toggle('sidebarGo');
   if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
       document.querySelector('.cross').style.display='none';
    document.querySelector('.hamburger').style.display='inline';
   }
   else{
       document.querySelector('.hamburger').style.display='none';
       document.querySelector('.cross').style.display='inline';
   }
})

document.querySelector('.cross').addEventListener('click',()=>{
   document.querySelector('.sidebar').classList.toggle('sidebarGo');
   if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
       document.querySelector('.cross').style.display='none';
    document.querySelector('.hamburger').style.display='inline';
   }
   else{
       document.querySelector('.hamburger').style.display='none';
       setTimeout(() => {
           document.querySelector('.cross').style.display='inline';  
       },300);
   }
})
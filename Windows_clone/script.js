taskbar=document.getElementById('windowsicon');
startmenu=document.getElementsByClassName('startmenu')[0];

taskbar.addEventListener("click",()=>{
    console.log('clicked');
    if(startmenu.style.bottom =="55px"){
        startmenu.style.bottom ="-617px"
    }
    else{
        startmenu.style.bottom ="55px"
    }
});
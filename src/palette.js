function changePalette(){
    var body = document.getElementById("body");
    if(body.classList.contains("ctp-latte")){
        document.querySelector('#theme').innerHTML = '<i class="fa-solid fa-sun"></i> Theme';
    }
    
    else {
        document.querySelector('#theme').innerHTML = '<i class="fa-solid fa-moon"></i> Theme';
    }
    body.classList.toggle("ctp-latte");
}
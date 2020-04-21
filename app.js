function increase(e){
    if(e.code != "KeyI"){
        return;
    }
    var x = document.getElementById("balloon");
    if(x.clientWidth == 60){
        x.setAttribute("src", "fire.png");
        document.removeEventListener('keyup', increase);
        document.removeEventListener('keyup', decrease);
    }else{
        var s = (x.clientWidth + 10) + "px";
        x.style.width = s;
        
    }
}
function decrease(e){
    if(e.code != "KeyU"){
        return;
    }
    var x = document.getElementById("balloon");
    if(x.clientWidth == 0){
        x.setAttribute("src", "fire.png");
        document.removeEventListener('keyup', increase);
        document.removeEventListener('keyup', decrease);
        document.getElementById("done").innerText = "Done";
        document.getElementById("done").style.textAlign = "center";

    }else{
        var s = (x.clientWidth - 10) + "px";
        x.style.width = s;
    }
    console.log(x.clientWidth);
}

document.addEventListener('keyup', increase);
document.addEventListener('keyup', decrease);
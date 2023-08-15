canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
pendown = false;
canvas.onmousedown = function(){
    pendown = true;
}
canvas.onmouseup = function(){
    pendown = false;
}


canvas.onmousemove = function(e){
    if(pendown){
        ctx.fillStyle = "#000";
        ctx.fillRect(e.pageX- 395, e.pageY- 202, 4, 4);
    }
}


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
        ctx.fillRect(e.pageX- 10, e.pageY- 5, 4, 4);
    }
}


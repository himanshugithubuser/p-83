var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color= "blue";
var width_of_line= 5;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent= "mousedown"
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseleave"
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    console.log(my_touchstart);
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    last_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    }

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
        console.log("last position of x and y coordinate= ");
        console.log("x="+last_position_of_x+"y="+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("current position of x and y coordinate= ");
        console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x= current_position_of_mouse_x;
    last_position_of_y= current_position_of_mouse_y;
}

function cleararea() {
    ctx.clearRect(0,0,800,600);
}
canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="yellow"
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5;
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
color="blue"
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5;
ctx.arc(150,150,40,0,2*Math.PI)
ctx.stroke()
color="black"
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5;
ctx.arc(250,150,40,0,2*Math.PI)
ctx.stroke()
color="green"
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5;
ctx.arc(300,200,40,0,2*Math.PI)
ctx.stroke()
color="red"
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5;
ctx.arc(350,150,40,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",mouse_click)
function mouse_click (e) 
{
    color = document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI)
    ctx.stroke()
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
} 
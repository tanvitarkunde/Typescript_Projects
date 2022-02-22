var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var isanim = false; //Initially False
this.context.translate(0, canvas.height); //Origin is left bottom corner
this.context.scale(1, -1);
//Lower tank
var lower_tank = new Geometry.Tank(new Geometry.Point(300, 100), context);
lower_tank.l = 75; //Initial level
lower_tank.color = "purple";
//Upper Tank
var upper_tank = new Geometry.Tank(new Geometry.Point(300, 300), context);
upper_tank.l = 75; //Initial level  
upper_tank.color = "blue";
var nand = new Geometry.Nand(new Geometry.Point(700, 225), context); //NAND Gate             
var led = new Geometry.LED(new Geometry.Point(800, 300), context); //LED
var resi = new Geometry.Resistor(new Geometry.Point(800, 320), context); //Resistor and arrows
var line = new Geometry.Line(new Geometry.Point(400, 137), context); //Connecting lines 
draw_all();
function draw_all() {
    upper_tank.draw();
    lower_tank.draw();
    nand.draw();
    led.draw();
    resi.draw();
    line.draw();
    text1();
}
//Slider for upper tank
var slider_upper = document.getElementById("myRange");
slider_upper.onchange = function function1() {
    context.clearRect(0, 0, canvas.width, canvas.height); //Clearing Canvas
    upper_tank.l = +slider_upper.value; //Assigning slider value to level of liquid
    upper_tank.draw();
    draw_all();
    if (+slider_upper.value < 37) { //Level of Upper Tank greater than 25%
        context.clearRect(0, 0, canvas.width, canvas.height);
        line.color2 = "grey";
        line.color3 = "green";
        led.color = "grey";
        draw_all();
    }
    else { //Level of Upper Tank less than 25%
        context.clearRect(0, 0, canvas.width, canvas.height);
        line.color2 = "green";
        line.color3 = "grey";
        led.color = "green";
        draw_all();
    }
};
//Slider for lower tank
var slider_lower = document.getElementById("myRange1");
slider_lower.onchange = function function2() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    lower_tank.l = +slider_lower.value; //Slider value = level of liquid
    draw_all();
    if (+slider_lower.value < 37) { //Level of Lower Tank greater than 25%
        context.clearRect(0, 0, canvas.width, canvas.height);
        line.color1 = "grey";
        line.color3 = "green";
        led.color = "grey";
        draw_all();
    }
    else { //Level of Lower Tank less than 25%
        context.clearRect(0, 0, canvas.width, canvas.height);
        line.color1 = "green";
        line.color3 = "grey";
        led.color = "green";
        draw_all();
    }
};
function text1() {
    context.save(); //Saved
    context.translate(0, canvas.height); //Original Axis of canvas
    context.scale(1, -1);
    this.context.beginPath();
    this.context.font = "12pt Lucida Console";
    this.context.fillStyle = "black";
    this.context.fillText("TANK B", 320, 375);
    this.context.fillText("TANK A", 320, 175);
    this.context.fillText("1/4 Level", 410, 290);
    this.context.fillText("Level Sensor A", 410, 245);
    this.context.fillText("1/4 Level", 410, 450);
    this.context.fillText("Level Sensor B", 410, 490);
    this.context.fillText("R", 775, 250);
    this.context.fillText("+ 5V", 790, 190);
    this.context.fillText("Y=(A.B)'", 830, 370);
    this.context.fill();
    context.restore(); //Restoring
}
//# sourceMappingURL=app.js.map
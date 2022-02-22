var Geometry;
(function (Geometry) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Geometry.Point = Point;
    class Tank {
        constructor(stpt, context) {
            this.l = 1;
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath(); //Sketching Container Rectangle
            this.context.rect(this._stpt.x, this._stpt.y, 100, 150);
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            //this.context.fill();
            this.context.stroke();
            this.context.beginPath(); //Sketching Inner Liquid Rectangle
            this.context.rect(this._stpt.x + 1, this._stpt.y + 1, 98, this.l); //"l"= Height of Liquid Rectangle
            //this.context.font="10pt Arial"
            //this.context.fillText(this.text,this._stpt.x+10,this._stpt.y+140);                    
            this.context.fillStyle = this.color;
            this.context.fill();
        }
    }
    Geometry.Tank = Tank;
    class Nand {
        constructor(stpt, context) {
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this._stpt.x, this._stpt.y);
            this.context.lineTo(this._stpt.x - 50, this._stpt.y); //Lower Horizontal line
            this.context.lineTo(this._stpt.x - 50, this._stpt.y + 50); //Vertical Line
            this.context.lineTo(this._stpt.x, this._stpt.y + 50); //Upper Horizontal Line
            this.context.stroke();
            this.context.beginPath(); //The Arc
            this.context.arc(this._stpt.x, this._stpt.y + 25, 25, Math.PI / 2, 3 * Math.PI / 2, true);
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(this._stpt.x + 25, this._stpt.y + 25, 7, 0, 2 * Math.PI, true); //NOT Circle
            this.context.fillStyle = "grey";
            this.context.fill();
            this.context.lineWidth = 2;
            this.context.stroke();
        }
    }
    Geometry.Nand = Nand;
    class LED {
        constructor(stpt, context) {
            this.color = "green";
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this._stpt.x - 10, this._stpt.y); //Lower Horizontal
            this.context.lineTo(this._stpt.x + 10, this._stpt.y);
            this.context.moveTo(this._stpt.x, this._stpt.y);
            this.context.lineTo(this._stpt.x - 15, this._stpt.y + 20); //Left slant 
            this.context.lineTo(this._stpt.x + 15, this._stpt.y + 20); //Upper horizontal
            this.context.lineTo(this._stpt.x, this._stpt.y); //Right Slant
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.stroke();
        }
    }
    Geometry.LED = LED;
    class Resistor {
        constructor(stpt, context) {
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this._stpt.x, this._stpt.y); //Resistor
            this.context.lineTo(this._stpt.x, this._stpt.y + 20);
            this.context.lineTo(this._stpt.x - 10, this._stpt.y + 25);
            this.context.lineTo(this._stpt.x + 10, this._stpt.y + 30);
            this.context.lineTo(this._stpt.x - 10, this._stpt.y + 35);
            this.context.lineTo(this._stpt.x + 10, this._stpt.y + 40);
            this.context.lineTo(this._stpt.x - 10, this._stpt.y + 45);
            this.context.lineTo(this._stpt.x + 10, this._stpt.y + 50);
            this.context.lineTo(this._stpt.x, this._stpt.y + 55);
            this.context.lineTo(this._stpt.x, this._stpt.y + 77);
            this.context.arc(this._stpt.x, this._stpt.y + 80, 5, 0, 2 * Math.PI, true);
            this.context.stroke();
            this.context.beginPath();
            this.context.moveTo(this._stpt.x + 30, this._stpt.y - 10); //Lower Arrow
            this.context.lineTo(this._stpt.x + 50, this._stpt.y - 30);
            this.context.lineTo(this._stpt.x + 35, this._stpt.y - 25);
            this.context.moveTo(this._stpt.x + 50, this._stpt.y - 30);
            this.context.lineTo(this._stpt.x + 45, this._stpt.y - 15);
            this.context.stroke();
            this.context.beginPath();
            this.context.moveTo(this._stpt.x + 50, this._stpt.y - 5); //Upper Arrow
            this.context.lineTo(this._stpt.x + 70, this._stpt.y - 25);
            this.context.lineTo(this._stpt.x + 55, this._stpt.y - 20);
            this.context.moveTo(this._stpt.x + 70, this._stpt.y - 25);
            this.context.lineTo(this._stpt.x + 65, this._stpt.y - 10);
            this.context.stroke();
        }
    }
    Geometry.Resistor = Resistor;
    class Line {
        constructor(stpt, context) {
            this.color1 = "green"; //Initializing Colors
            this.color2 = "green";
            this.color3 = "grey";
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath(); //Line from lower tank to NAND Gate
            this.context.moveTo(this._stpt.x, this._stpt.y);
            this.context.lineTo(this._stpt.x + 150, this._stpt.y);
            this.context.lineTo(this._stpt.x + 150, this._stpt.y + 100);
            this.context.lineTo(this._stpt.x + 250, this._stpt.y + 100);
            this.context.strokeStyle = this.color1;
            this.context.lineWidth = 3;
            this.context.stroke();
            this.context.beginPath(); //Line from upper tank to NAND Gate
            this.context.moveTo(this._stpt.x, this._stpt.y + 200);
            this.context.lineTo(this._stpt.x + 150, this._stpt.y + 200);
            this.context.lineTo(this._stpt.x + 150, this._stpt.y + 120);
            this.context.lineTo(this._stpt.x + 250, this._stpt.y + 120);
            this.context.strokeStyle = this.color2;
            this.context.lineWidth = 3;
            this.context.stroke();
            this.context.beginPath(); //Line from  NAND  to LED
            this.context.moveTo(this._stpt.x + 332, this._stpt.y + 115);
            this.context.lineTo(this._stpt.x + 400, this._stpt.y + 115);
            this.context.lineTo(this._stpt.x + 400, this._stpt.y + 163);
            this.context.strokeStyle = this.color3;
            this.context.lineWidth = 4;
            this.context.stroke();
        }
    }
    Geometry.Line = Line;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=framework.js.map
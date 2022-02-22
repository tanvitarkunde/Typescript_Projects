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
            // this.context.fill();
            this.context.stroke();
            this.context.beginPath(); //Sketching Inner Liquid Rectangle
            this.context.rect(this._stpt.x + 1, this._stpt.y + 1, 98, this.l); //"l"= Height of Liquid Rectangle
            // this.context.font="10pt Arial"
            //this.context.fillText(this.text,100,50);                    
            this.context.fillStyle = this.color;
            this.context.fill();
            this.update(); //Calling Update Function
        }
        update() {
            this.l++; //Incrementing length of liqiud rect by 1
            this.check(); //Calling Function Check
        }
        check() {
            if (this.l > 150) { //When Length of Liquid Rect reaches Max,setting it to 148                                                  
                this.l = 149;
            }
        }
    }
    Geometry.Tank = Tank;
    class Not {
        constructor(stpt, context) {
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this._stpt.x, this._stpt.y); //Vertical line
            this.context.lineTo(this._stpt.x, this._stpt.y + 40);
            this.context.lineTo(this._stpt.x + 25, this._stpt.y + 20); //upper slant horizontal  
            this.context.lineTo(this._stpt.x, this._stpt.y); //Lower slant horizontal
            this.context.moveTo(this._stpt.x + 25, this._stpt.y + 20);
            this.context.arc(this._stpt.x + 30, this._stpt.y + 20, 5, 0, 2 * Math.PI, true); //Circle
            this.context.lineWidth = 2;
            this.context.stroke();
        }
    }
    Geometry.Not = Not;
    class And {
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
            this.context.lineWidth = 2;
            this.context.stroke();
        }
    }
    Geometry.And = And;
    class Line {
        constructor(stpt, context) {
            this.color1 = "grey"; //Initializing Colors
            this.color2 = "grey";
            this.color3 = "green";
            this.color4 = "grey";
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath(); //Line from lower tank to AND Gate
            this.context.moveTo(this._stpt.x, this._stpt.y);
            this.context.lineTo(this._stpt.x + 250, this._stpt.y);
            this.context.lineTo(this._stpt.x + 250, this._stpt.y + 125);
            this.context.lineTo(this._stpt.x + 300, this._stpt.y + 125);
            this.context.strokeStyle = this.color1;
            this.context.lineWidth = 3;
            this.context.stroke();
            this.context.beginPath(); //Line from upper tank to NOT Gate
            this.context.moveTo(this._stpt.x, this._stpt.y + 285);
            this.context.lineTo(this._stpt.x + 100, this._stpt.y + 285);
            this.context.strokeStyle = this.color2;
            this.context.lineWidth = 3;
            this.context.stroke();
            this.context.beginPath(); //Line from NOT Gate to AND Gate
            this.context.moveTo(this._stpt.x + 125, this._stpt.y + 285);
            this.context.lineTo(this._stpt.x + 200, this._stpt.y + 285);
            this.context.lineTo(this._stpt.x + 200, this._stpt.y + 150);
            this.context.lineTo(this._stpt.x + 300, this._stpt.y + 150);
            this.context.strokeStyle = this.color3;
            this.context.lineWidth = 3;
            this.context.stroke();
            this.context.beginPath(); //Line from AND Gate to Motor
            this.context.moveTo(this._stpt.x + 375, this._stpt.y + 140);
            this.context.lineTo(this._stpt.x + 450, this._stpt.y + 140);
            this.context.strokeStyle = this.color4;
            this.context.lineWidth = 4;
            this.context.stroke();
        }
    }
    Geometry.Line = Line;
    class Circle {
        constructor(stpt, context) {
            this.color = "grey"; //Initial Color
            this._stpt = stpt;
            this.context = context;
        }
        draw() {
            this.context.beginPath(); //Sketching Circle
            this.context.arc(this._stpt.x, this._stpt.y, 20, 0, 2 * Math.PI, true);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.stroke();
        }
    }
    Geometry.Circle = Circle;
    class Motor_Inside {
        constructor(stpt, endpt, context) {
            this._stpt = stpt;
            this._endpt = endpt;
            this.context = context;
            this._length = this.length;
            this._angle = this.angle;
        }
        get length() {
            let l = Math.sqrt(Math.pow(this._stpt.x - this._endpt.x, 2) + Math.pow(this._stpt.y - this._endpt.y, 2));
            return (l);
        }
        get angle() {
            let ang = Math.atan2(this._endpt.y - this._stpt.y, this._endpt.x - this._stpt.x) * 180 / Math.PI;
            return (ang);
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this._endpt.x, this._endpt.y, 5, 0, 2 * Math.PI, true);
            this.context.fillStyle = "yellow";
            this.context.fill();
        }
        rotate() {
            this._angle++; //Incrementing Angle
            this._endpt.x = this._stpt.x + this._length * Math.cos(this._angle * Math.PI / 180);
            this._endpt.y = this._stpt.y + this._length * Math.sin(this._angle * Math.PI / 180);
            this.rotatecheck();
        }
        rotatecheck() {
            if (this._angle >= 360) {
                this._angle = 0;
            }
        }
    }
    Geometry.Motor_Inside = Motor_Inside;
    /* export class Text{
         public context:CanvasRenderingContext2D;
         
         constructor(context:CanvasRenderingContext2D){
             
             this.context=context;
 
         }
         draw(){
             this.context.beginPath();
             this.context.font="10pt luicida"
             this.context.fillStyle="black"
             this.context.fillText("TANK A",150,150);
             this.context.fill();
         }
 
     }*/
})(Geometry || (Geometry = {}));
//# sourceMappingURL=framework.js.map
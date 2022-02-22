var canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
var isanim:boolean=false;                                                                    //Initially False

this.context.translate(0,canvas.height);                                                     //Origin is left bottom corner
this.context.scale(1,-1) 


//Lower tank
var lower_tank=new Geometry.Tank(new Geometry.Point(300,100),context); 
lower_tank.l=20;                                                                            //Initial level
lower_tank.color="purple"


//Upper Tank
var upper_tank=new Geometry.Tank(new Geometry.Point(300,300),context);    
upper_tank.l=20;                                                                            //Initial level  
upper_tank.color="blue"


var not=new Geometry.Not(new Geometry.Point(500,400),context);                               //Not gate                             
var and=new Geometry.And(new Geometry.Point(750,250),context);                               //And Gate
var line=new Geometry.Line(new Geometry.Point(400,137),context);                             //Connecting lines   
var motor=new Geometry.Circle(new Geometry.Point(870,280),context);                          //Circle

var stpt=new Geometry.Point(870,280);
var endpt=new Geometry.Point(885,280);
var motor_in=new Geometry.Motor_Inside(stpt,endpt,context)                                   //Circle inside Motor Circle

draw_all();

function draw_all(){                                                                         //Function to draw all sketches
    lower_tank.draw();
    upper_tank.draw();
    not.draw();
    and.draw();
    line.draw();
    motor.draw();
    text1();
}
  

//Slider for upper tank
var slider_upper:HTMLInputElement=<HTMLInputElement>document.getElementById("myRange");                                                            
slider_upper.onchange = function function1(){
    context.clearRect(0,0,canvas.width,canvas.height);                                      //Clearing Canvas
    upper_tank.l=+slider_upper.value                                                        //Assigning slider value to level of liquid
    upper_tank.draw();   
    draw_all();  

}


//Slider for lower tank
var slider_lower:HTMLInputElement=<HTMLInputElement>document.getElementById("myRange1");                   
slider_lower.onchange = function function2(){
   
    context.clearRect(0,0,canvas.width,canvas.height);
    lower_tank.l=+slider_lower.value                                                       //Slider value = level of liquid
    draw_all();

   
    if(+slider_lower.value>=37 && +slider_upper.value<149){                                 //Level of Lower Tank greater than 25%
        isanim=true;
        context.clearRect(0,0,canvas.width,canvas.height);
        line.color1="green";                                                               //Changing colors of lines
        line.color4="green";
        motor.color="green";
        
        draw_all();
    
        motor_in.rotate();                                                                 //Rotation of circle inside motor circle
        motor_in.draw();
  
       
            window.requestAnimationFrame(function2);                                        //Animation
                                                                                          
        

        if(upper_tank.l==149){                                                             //At max level
           
            slider_upper.value="149";
            line.color2="green";                                                           //Color Change for lines
            line.color3="grey";
            line.color4="grey";
            motor.color="grey";
            line.draw();
            motor.draw();
            motor_in.draw();
        }
        
        
    
    } 

    if(+slider_lower.value<37){                                                           //Level of Lower Tank less than 25%

        upper_tank.l=+slider_upper.value;
        upper_tank.draw();

        line.color1="grey";                                                               //Color Change for lines
        line.color4="grey";
        motor.color="grey";
    }
}    

function text1(){                                                                         //Text
    context.save();
    context.translate(0,canvas.height);                                                   //Again Translating to original co ordinates
    context.scale(1,-1);
    this.context.beginPath();
    this.context.font="12pt Lucida Console"
    this.context.fillStyle="black"
    this.context.fillText("TANK A",320,375);
    this.context.fillText("TANK B",320,175);
    this.context.fillText("Full Level",410,150);
    this.context.fillText("Level Sensor B",410,220);
    this.context.fillText("1/4 Level",410,450);
    this.context.fillText("Level Sensor A",410,490);
    this.context.fillText("Y=(A.B)'",830,370);
    this.context.fill();
    context.restore();
}


















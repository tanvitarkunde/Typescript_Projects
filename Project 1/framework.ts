namespace Geometry{
    export class Point{                                                                          //Class point for initializing start point
        public x:number;
        public y:number;

        constructor(x:number,y:number){
            this.x=x;
            this.y=y;
        }

    }

    export class Tank{                                                                           //Class for Upper and Lower Tanks
        public _stpt:Point;                                                                      //Start Point
        public context:CanvasRenderingContext2D;
        public l:number=1
        public color:string;
        public text:string;

        constructor(stpt:Point,context:CanvasRenderingContext2D){
            this._stpt=stpt;
            this.context=context;

        }
         
        draw(){                                                                                 

        
            this.context.beginPath();                                                           //Sketching Container Rectangle
            this.context.rect(this._stpt.x,this._stpt.y,100,150);                  
            this.context.strokeStyle="black";
            this.context.lineWidth=2;
           // this.context.fill();
            this.context.stroke();

           
            this.context.beginPath();                                                           //Sketching Inner Liquid Rectangle
            this.context.rect( this._stpt.x+1, this._stpt.y+1,98, this.l);                      //"l"= Height of Liquid Rectangle
           // this.context.font="10pt Arial"
            //this.context.fillText(this.text,100,50);                    
            this.context.fillStyle=this.color;
            this.context.fill();
            this.update();                                                                      //Calling Update Function
   
            
           

        }

        private update(){                                                                       
            this.l++;                                                                           //Incrementing length of liqiud rect by 1
            this.check();                                                                       //Calling Function Check
            
        }

        private check(){
            if(this.l>150){                                                                    //When Length of Liquid Rect reaches Max,setting it to 148                                                  
                this.l=149 ;                  
                
            }
        }

    }

    export class Not{                                                                           //NOT Gate
        public _stpt:Point;                                                                     //Starting Point
        public context:CanvasRenderingContext2D;
        
        constructor(stpt:Point,context:CanvasRenderingContext2D){
            this._stpt=stpt;
            this.context=context;

        }

        draw(){
            this.context.beginPath();
            this.context.moveTo(this._stpt.x,this._stpt.y);                                     //Vertical line
            this.context.lineTo(this._stpt.x,this._stpt.y+40);
                                                                                           
            this.context.lineTo(this._stpt.x+25,this._stpt.y+20)                                //upper slant horizontal  
                              
            this.context.lineTo(this._stpt.x,this._stpt.y)                                      //Lower slant horizontal
            this.context.moveTo(this._stpt.x+25,this._stpt.y+20)
            this.context.arc(this._stpt.x+30,this._stpt.y+20,5,0,2*Math.PI,true);               //Circle

            this.context.lineWidth=2;
            this.context.stroke();

        }
    }

    export class And{                                                                           //AND Gate
        public _stpt:Point;                                                                     //Start Point
        public context:CanvasRenderingContext2D;
        
        constructor(stpt:Point,context:CanvasRenderingContext2D){
            this._stpt=stpt;
            this.context=context;

        }

        draw(){
           this.context.beginPath();
           this.context.moveTo(this._stpt.x,this._stpt.y);                             
           this.context.lineTo(this._stpt.x-50,this._stpt.y);                                    //Lower Horizontal line
           
           this.context.lineTo(this._stpt.x-50,this._stpt.y+50);                                 //Vertical Line

           this.context.lineTo(this._stpt.x,this._stpt.y+50);                                    //Upper Horizontal Line
           this.context.stroke(); 

           this.context.beginPath();                                                             //The Arc
           this.context.arc(this._stpt.x,this._stpt.y+25,25,Math.PI/2,3*Math.PI/2,true); 

           this.context.lineWidth=2;
           this.context.stroke();
        }
    }

        export class Line{                                                                            //Conneting Lines

            private _stpt:Point;                                                                      //Start Point
            public color1:string="grey"                                                               //Initializing Colors
            public color2:string="grey"
            public color3:string="green"
            public color4:string="grey"
            public context:CanvasRenderingContext2D;
            
            constructor(stpt:Point,context:CanvasRenderingContext2D){
                this._stpt=stpt;
                this.context=context;

        }
        draw(){
            
            this.context.beginPath();                                                            //Line from lower tank to AND Gate
            this.context.moveTo(this._stpt.x,this._stpt.y);
            this.context.lineTo(this._stpt.x+250,this._stpt.y);
            this.context.lineTo(this._stpt.x+250,this._stpt.y+125);
            this.context.lineTo(this._stpt.x+300,this._stpt.y+125);
            this.context.strokeStyle=this.color1;
            this.context.lineWidth=3;
            this.context.stroke();  
            
            this.context.beginPath();                                                            //Line from upper tank to NOT Gate
            this.context.moveTo(this._stpt.x,this._stpt.y+285);
            this.context.lineTo(this._stpt.x+100,this._stpt.y+285);
            this.context.strokeStyle=this.color2;
            this.context.lineWidth=3;
            this.context.stroke();

            this.context.beginPath();                                                            //Line from NOT Gate to AND Gate
            this.context.moveTo(this._stpt.x+125,this._stpt.y+285); 
            this.context.lineTo(this._stpt.x+200,this._stpt.y+285);
            this.context.lineTo(this._stpt.x+200,this._stpt.y+150);
            this.context.lineTo(this._stpt.x+300,this._stpt.y+150);
            this.context.strokeStyle=this.color3;
            this.context.lineWidth=3;
            this.context.stroke();

            this.context.beginPath();                                                            //Line from AND Gate to Motor
            this.context.moveTo(this._stpt.x+375,this._stpt.y+140);
            this.context.lineTo(this._stpt.x+450,this._stpt.y+140);
            this.context.strokeStyle=this.color4;
            this.context.lineWidth=4;
            this.context.stroke();
        }
    }
      
    export class Circle{                                                                         //Motor Base Circle
        public _stpt:Point;                                                                      //Centre Point
        public color:string="grey"                                                               //Initial Color

        public context:CanvasRenderingContext2D;
        
        constructor(stpt:Point,context:CanvasRenderingContext2D){
            this._stpt=stpt;
            this.context=context;

        }

        draw(){
            this.context.beginPath();                                                             //Sketching Circle
            this.context.arc(this._stpt.x,this._stpt.y,20,0,2*Math.PI,true);
            this.context.lineWidth=2;
            this.context.strokeStyle="black"
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.stroke();
        }
    }

    export class Motor_Inside{                                                                    //Circle inside Motor Circle
        private _stpt:Point;                                                                    
        private _endpt:Point;
        private _angle:number;
        private _length:number;
        private context:CanvasRenderingContext2D;
       
        constructor(stpt:Point,endpt:Point,context:CanvasRenderingContext2D){
            this._stpt=stpt;
            this._endpt=endpt;
            this.context=context;
            this._length=this.length;
            this._angle=this.angle;

        }

        private get length(){
            let l=Math.sqrt(Math.pow(this._stpt.x-this._endpt.x,2) + Math.pow(this._stpt.y-this._endpt.y,2));
            return (l)
        }

        private get angle(){
            let ang=Math.atan2(this._endpt.y-this._stpt.y,this._endpt.x-this._stpt.x)*180/Math.PI;
            return (ang);
        }

        draw(){
            this.context.beginPath();
            this.context.arc(this._endpt.x,this._endpt.y,5,0,2*Math.PI,true);
            this.context.fillStyle="yellow";
            this.context.fill();
        }

        rotate(){                                                                                   //For Rotation
            this._angle++;                                                                          //Incrementing Angle

            this._endpt.x=this._stpt.x+this._length*Math.cos(this._angle*Math.PI/180);
            
            this._endpt.y=this._stpt.y+this._length*Math.sin(this._angle*Math.PI/180);

            this.rotatecheck();
        }

        
        private rotatecheck(){                                                                       //Motion handling
            if(this._angle>=360){
                this._angle=0;
            }
        }
    }

}

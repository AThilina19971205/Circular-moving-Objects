const sun=document.getElementById('sun');

class Object{
    x=200;
    y=200;
    a=900;
    b=400;
    r=200;
    angle=0;
    dir=1
    elm;
    
    constructor(radius,dir){
        this.r=radius;
        this.dir=dir
        this.elm=document.createElement('div');
        this.elm.style.width="50px"
        this.elm.style.height="50px"
        this.elm.style.borderRadius="100%";
        this.elm.style.left=`${this.x}px`;
        this.elm.style.top=`${this.y}px`;
        this.elm.style.position="absolute";
        this.elm.style.backgroundColor="blue";
        console.log("hey");
        console.log(this.x);
        console.log(this.y);

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.elm.style.backgroundColor = `rgb(${r},${g},${b})`;

        document.body.append(this.elm);
    }
    move(){
        this.x=this.a + this.r*(Math.cos(Math.PI/180*this.angle*this.dir))-25;
        this.y=this.b - this.r*(Math.sin(Math.PI/180*this.angle*this.dir))-25;
        this.elm.style.left=this.x+"px";
        this.elm.style.top=this.y+"px";
        this.angle++;
    }
}
const obj4=new Object(r=360,1);
const obj3=new Object(r=300,-1);
const obj2=new Object(r=240,1);
const obj1=new Object(180,-1);
const obj=new Object(120,1);



let val=0
setInterval(() => {
    if(val%5==0){
        obj.move();
    }
    if(val%5==0){
        obj1.move();
    }
    if(val%4==0){
        obj2.move();
    }
    
    if(val%3==0){
        obj3.move();
    }
    if(val%2==0){
        obj4.move();
    }
    val++;

}, 5);
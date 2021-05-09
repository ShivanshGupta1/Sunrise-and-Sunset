const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

async function preload() {
    // create getBackgroundImg( ) here
    let result = await getBackgroundImg()
    console.log(result)
    if(result>=04 && result<=06){
        backgroundImg = loadImage("sunrise1.png")
       } 
       else if(result>=06 && result<=08){
        backgroundImg = loadImage("sunrise2.png")
       }
       else if(result>=08 && result<=10){
        backgroundImg = loadImage("sunrise3.png")
       }
       
       else if(result>=10 && result<=12){
  
           backgroundImg = loadImage("sunrise4.png")
       }
       else if(result>=12 && result<=14){
        backgroundImg = loadImage("sunrise5.png")
       }
       else if(result>=14 && result<=16){
        backgroundImg = loadImage("sunrise6.png")
       }
       else if(result>=16 && result<=18){
        backgroundImg = loadImage("sunset7.png")
       }
       else if(result>=18 && result<=20){
        backgroundImg = loadImage("sunset8.png")
       }
       else if(result>=20 && result<=21){
        backgroundImg = loadImage("sunset9.png")
       }
       else if(result>=21 && result<=22){
        backgroundImg = loadImage("sunset10.png")
       }
       else if(result>=22 && result<=23){
        backgroundImg = loadImage("sunset11.png")
       }
       else if(result>=23 && result<=00){
        backgroundImg = loadImage("sunset12.png")
       }
       console.log(backgroundImg)
     
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg!==undefined){
        
        background(backgroundImg)
    }
    else{
        background("black")
    }

    Engine.update(engine);

    // write code to display time in correct format here
    
}

async function getBackgroundImg(){

    let response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    let result = await response.json();
    let datetime = result.datetime;
    let hour = datetime.slice(11,13);
    return hour




}

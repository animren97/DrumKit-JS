//detecting button pressed
var randomNumber=document.querySelectorAll(".drum").length

for (i=0; i < randomNumber; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
 var buttonInnerHTML = this.innerHTML;
 makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML)
})
}

//detecting keyboard pressed
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
})

 function makeSound(key){

    switch(key){
        case "w":   
        var w = new Audio ("sounds/w.mp3")
          w.play();
    break;
    case "a":   
        var a = new Audio ("sounds/a.mp3")
          a.play();
    break;
    case "s":   
        var s = new Audio ("sounds/s.mp3")
          s.play();
    break;
    case "d":   
        var d = new Audio ("sounds/d.mp3")
          d.play();
    break;
    case "j":   
        var j = new Audio ("sounds/j.mp3")
          j.play();
    break;
    case "k":   
        var k = new Audio ("sounds/k.mp3")
          k.play();
    break;
    case "l":   
        var l = new Audio ("sounds/l.mp3")
          l.play();
    break;
    default: console.log(key)
    }}
 
function buttonAnimation (currentKey){
    var acctiveButton = document.querySelector("."+currentKey)
    acctiveButton.classList.add("pressed")

    setTimeout(function (){
        acctiveButton.classList.remove("pressed")
    },100)
 }



function addAnotherEventListener (typeOfEvent, callback){
    var addEventListener= {
        eventType: "keypress",
        key: "p",
        durationOfFunction: 2
    }
    if (addAnotherEventListener.eventType===typeOfEvent){
        callback(addEventListener)
    }
}
 



var houseKeeper = {
    name: "Nermina",
    age:25,
    years:5
}


function HouseKepper (name,age,hasWorkPermit,language){
    this.name= name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.language=language;

}
var houseKeeper= new HouseKepper ("Jenny",23,true,"English,French")





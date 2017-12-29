var coffee=document.querySelector("#coffee img");
var coffeet=document.querySelector("#coffee h4");
var ice=document.querySelector("#ice img");
var icet=document.querySelector("#ice h4");
var dinner=document.querySelector("#dinner img");
var dinnert=document.querySelector("#dinner h4");
var drinks=document.querySelector("#drinks img");
var drinkst=document.querySelector("#drinks h4");


function move(){
  console.log(this);
  this.className += " checked transition";
  if(this.id === "cicon"){
    console.log(coffeet);
    coffeet.style.animation="up .8s";
    coffeet.style.animationFillMode="forwards";
    icet.style.animation="down .8s";
    icet.style.animationFillMode="forwards";
    dinnert.style.animation="down .8s";
    dinnert.style.animationFillMode="forwards";
    drinkst.style.animation="down .8s";
    drinkst.style.animationFillMode="forwards";
    ice.className = "icon transition";
    dinner.className = "icon transition";
    drinks.className = "icon transition";
  }else if(this.id ==="iicon"){
    icet.style.animation="up .8s";
    icet.style.animationFillMode="forwards";
    coffeet.style.animation="down .8s";
    coffeet.style.animationFillMode="forwards";
    dinnert.style.animation="down .8s";
    dinnert.style.animationFillMode="forwards";
    drinkst.style.animation="down .8s";
    drinkst.style.animationFillMode="forwards";
    coffeet.className = "transitiont";
    coffee.className = "icon transition";
    dinner.className = "icon transition";
    drinks.className = "icon transition";
  }else if(this.id ==="dicon"){
    dinnert.style.animation="up .8s";
    dinnert.style.animationFillMode="forwards";
    coffeet.style.animation="down .8s";
    coffeet.style.animationFillMode="forwards";
    icet.style.animation="down .8s";
    icet.style.animationFillMode="forwards";
    drinkst.style.animation="down .8s";
    drinkst.style.animationFillMode="forwards";
    coffee.className = "icon transition";
    ice.className = "icon transition";
    drinks.className = "icon transition";
  }else if(this.id ==="dricon"){
    drinkst.style.animation="up .8s";
    drinkst.style.animationFillMode="forwards";
    coffeet.style.animation="down .8s";
    coffeet.style.animationFillMode="forwards";
    icet.style.animation="down .8s";
    icet.style.animationFillMode="forwards";
    dinnert.style.animation="down .8s";
    dinnert.style.animationFillMode="forwards";
    coffee.className = "icon transition";
    ice.className = "icon transition";
    dinner.className = "icon transition";
  }
}



coffee.onclick = move;
ice.onclick = move;
dinner.onclick = move;
drinks.onclick=move;

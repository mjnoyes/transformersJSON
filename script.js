var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function chrMaker(obj) {
  var pEle = document.createElement("div");
  pEle.classList.add("character");
  if(obj.afl == "autobot"){
    pEle.classList.add("autobot");
  }
  else if(obj.afl == "decepticon"){
    pEle.classList.add("decepticon");
  }
  
  var nEle = document.createElement("body");
  nEle.innerHTML = "Name: " + obj.name
  
  var cEle = document.createElement("body");
  cEle.style.textTransform = "uppercase";
  cEle.innerHTML = obj.class    
  
  var vEle = document.createElement("body");
  if(obj.vehicle == "truck"){
    vEle.style.color="blue";
  }
  else if(obj.vehicle == "tank"){
    vEle.style.color="green";
  }
  else if(obj.vehicle == "car"){
    vEle.style.color="gold";
  }
  else if(obj.vehicle == "plane"){
    vEle.style.color="white";
  }
  vEle.innerHTML = obj.vehicle 
  
  var aEle = document.createElement("img");
  if(obj.afl == "autobot"){
    aEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }
  else if(obj.afl == "decepticon"){
    aEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
   
  pEle.appendChild(nEle);
  pEle.appendChild(cEle);
  pEle.appendChild(vEle);
  pEle.appendChild(aEle);
  wrapperEle.appendChild(pEle);
}

for(var i=0; i<chrs.length; i++){
  chrMaker(chrs[i]);
}

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png
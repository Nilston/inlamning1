document.querySelector(".testSelect").addEventListener("change", function(){
  console.log("hej");
  var e = document.querySelector(".testSelect");
  var color = e.options[e.selectedIndex].value;
  console.log(color);
  if(color=="grey"){
    document.querySelector("body").style.backgroundColor = "#CDCBCB";
    document.querySelector("header").style.backgroundColor = "#FDFCFC";
    document.querySelector("#navigation").style.backgroundColor = "#7A7474";
    document.querySelector("main").style.backgroundColor = "#A3A0A0";
    document.querySelector("footer").style.backgroundColor = "#A3A0A0";
    localStorage.setItem("colorbody", "#CDCBCB");
    localStorage.setItem("colorheader","#FDFCFC" );
    localStorage.setItem("colornavigation","#7A7474");
    localStorage.setItem("colormain", "#A3A0A0");
    localStorage.setItem("colorfooter", "#A3A0A0");

  }else if(color =="atomic"){
    console.log("konstig");
    document.querySelector("body").style.backgroundColor = "#100C2C";
    document.querySelector("header").style.backgroundColor = "#64A011";
    document.querySelector("#navigation").style.backgroundColor = "#AF7413";
    document.querySelector("main").style.backgroundColor = "#261C7A";
    document.querySelector("footer").style.backgroundColor = "#AC121A";
    localStorage.setItem("colorbody", "#100C2C");
    localStorage.setItem("colorheader", "#64A011");
    localStorage.setItem("colornavigation","#AF7413");
    localStorage.setItem("colormain", "#261C7A");
    localStorage.setItem("colorfooter", "#AC121A");

  }else if (color =="yellow") {
    console.log("Gul");
    document.querySelector("body").style.backgroundColor = "#FFE800";
    document.querySelector("header").style.backgroundColor = "#380CFF";
    document.querySelector("#navigation").style.backgroundColor = "#FF0018";
    document.querySelector("main").style.backgroundColor = "#2CFF00";
    document.querySelector("footer").style.backgroundColor = "#FF263B";
    localStorage.setItem("colorbody", "#FFE800");
    localStorage.setItem("colorheader", "#380CFF");
    localStorage.setItem("colornavigation","#FF0018");
    localStorage.setItem("colormain", "#2CFF00");
    localStorage.setItem("colorfooter", "#FF263B");

  }else if (color=="standard"){
    console.log("standard");
    document.querySelector("body").style.backgroundColor = "#FFB149";
    document.querySelector("header").style.backgroundColor = "#357DA3";
    document.querySelector("#navigation").style.backgroundColor = "#FFB149";
    document.querySelector("main").style.backgroundColor = "#32B07A";
    document.querySelector("footer").style.backgroundColor = "#FF7D49";
    localStorage.setItem("colorbody", "#FFB149");
    localStorage.setItem("colorheader", "#357DA3");
    localStorage.setItem("colornavigation","#FFB149");
    localStorage.setItem("colormain", "#32B07A");
    localStorage.setItem("colorfooter", "#FF7D49");
  }
}, false);

if(localStorage.getItem("colorbody") != undefined){
  document.querySelector("body").style.backgroundColor = localStorage.getItem("colorbody");
  document.querySelector("header").style.backgroundColor = localStorage.getItem("colorheader");
  document.querySelector("footer").style.backgroundColor = localStorage.getItem("colorfooter");
  document.querySelector("#navigation").style.backgroundColor = localStorage.getItem("colornavigation");
  document.querySelector("main").style.backgroundColor = localStorage.getItem("colormain");
}

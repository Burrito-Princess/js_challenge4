const container = document.getElementById("container");
let id = 0;
var matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let x = 0;
let y = 0;
let pos = 0;
let size = matrix.length * matrix[0].length;
let con = document.getElementById("container");

//start squares
let u = 0; //up
let d = 0; //down
let l = 0; // left
let r = 0; // right
let s = 0; //active location
let t = 0; //total

let id_array = [];
var colour = "blue";

//set canvas size 
con.style.width = matrix[0].length * 50 + "px";
con.style.height = matrix.length * 50 + "px";
//build blocks

function color(c){
  colour = c;
}

begin();

function begin(){
  id = 0;
  for (let i = 0; i < size; i++) {
    id++;
    let div = document.createElement("div");
    div.id = id;
    div.style.backgroundColor = "white";
    id_array.push(div);
    var array = document.getElementsByClassName("square");
    div.addEventListener("click", function(){
      change(this.id, array);
    });
    div.className = "square";
    container.appendChild(div);
    if (y == matrix[0].length) {
      x++;
      y = 0;
    }
};
}


function square(){
  id = 0;
  for (let i = 0; i < size; i++) {
    id++;
    let div = document.createElement("div");
    div.id = id;
    id_array.push(div);
    var array = document.getElementsByClassName("square");
    div.addEventListener("click", function(){
      change(this.id, array);
    });
    div.className = "square";
    container.appendChild(div);
    if (y == matrix[0].length) {
      x++;
      y = 0;
    }
    
    // if (matrix[x][y] === 1 ) {
    //   array[pos].style.backgroundColor = "green";
    // } else if (matrix[x][y] === 2) {
    //   array[pos].style.backgroundColor = "blue";
    // } else if (matrix[x][y] === 3) {
    //   array[pos].style.backgroundColor = "red";
    // };
    y++;
    pos++;
  };
}

function increase(){

  x = 0;
  y = 0;
  let colour2 = "blue";
  for (let a = 0; a < size; a++){
    let bgcsquare = document.getElementsByClassName("square");
    // colour = bgcsquare[a].style.backgroundColor;
    matrix[x][y].style.backgroundColor = colour2;
  }
  console.log("increase");
  let matn = 0;
  for (let o = 0; o < matrix.length; o++){
    matrix[matn].push(0); 
    matn++;
  }
  let divn = 0;
  let element;
  for(let i = 0; i < size; i++){
    divn++;
    element = document.getElementById(divn);
    element.remove();
  };
  matrix.push(matrix[1]);
  size = matrix.length * matrix[0].length;
  con.style.width = matrix[0].length * 50 + "px";
  con.style.height = matrix.length * 50 + "px";
  square();
  
  
}

function change(id, array){
  console.log(id);
  if(array[id - 1].style.backgroundColor == "white" ){
    array[id - 1].style.backgroundColor = colour;
  }else{
    array[id - 1].style.backgroundColor = "white";
  }
}



// let array = document.getElementsByClassName("square");
// let colourarray = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "hotpink",
// ];

// firsttimer();

// let x = 0;
// let randomColor = 0;

// for (let i = 0; i < nsquare; i++){
//     x++;
//     if (x == 1 + side){
//         array[x].style.backgroundColor= "purple";
//     }
// }

// function firsttimer() {
  // // x++;
  // x = Math.floor(Math.random() * 1000);
  // randomColor = Math.floor(Math.random()*16777215).toString(16);
  // console.log(randomColor);
  // if (x == nsquare){
  //     // x = 0;
  //     // nsquare--;
  // }
  // array[x].style.backgroundColor = "#" + randomColor;
  // // array[x - 1].style.backgroundColor = "white";
  // // c++;
  // // if (c == 7){
  // //     c = 0;
  // // };
  // requestAnimationFrame(firsttimer);
// }
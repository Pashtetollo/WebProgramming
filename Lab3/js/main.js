import {
  renderFruits,
  addNewFruitHeader,
  cardsContainer
} from "./utils.js";

import{
  getAllFruits
} from "./API.js"
const base_url = "localhost:8080/fruit";

let cardarray = document.getElementsByClassName('card');
let send_btn = document.getElementById("post-button")
let update_btn = document.getElementById("put-button")
const page_number = document.getElementById("page-number");
const search_input = document.getElementById("search-input");
const search_button = document.getElementById("search-button");
export const find_fruit = document.getElementById("findModal")
export const span = document.getElementsByClassName("close")[0];
export const span_find = document.getElementsByClassName("close")[1];
const modal = document.getElementById("myModal");
const prev_page = document.getElementById("prev-page");
const next_page = document.getElementById("next-page");
class Fruit{
  constructor(id, season, color, price, fruitKind, name){
    this.id=id;
    this.season=season;
	  this.color=color;
	  this.price=price;
	  this.fruitKind=fruitKind;
    this.name=name;
  }
}
let filteredFruits =[]
export let renderedFruits =[]
const request_results = await getAllFruits();
export let fruits = request_results.map((fruit => new Fruit(fruit.id, fruit.season, fruit.color, fruit.price, fruit.fruitKind, fruit.name)));
export let page = 1;
selectFruits()
renderFruits()
document.addEventListener('keydown', (event) => {
  var name = event.key;
  if ((modal.style.display == "") && (find_fruit.style.display == "")){
  if(name === "ArrowRight" ){
   go_next_page()
  }
  if(name ==="s"){
    fruits.sort(compareNumbers)
    selectFruits()
    renderFruits()
  }
  if(name === "ArrowLeft"){
   previous_page()
  }
  if(name === "f"){
    find_fruit.style.display = "block";
  }
  if(name === "Escape"){
    modal.style.display="none"
    find_fruit.style.display="none"
  }
  }
  }, false);

prev_page.addEventListener("click", (event)=> {
  if (page>1){
  page--;
  selectFruits()
  renderFruits()
  boink(prev_page)
  boink(page_number)
  
  smoll_boink()
  }
  else{
    vibro_n_buzz()
  }
})

next_page.addEventListener("click", (event)=> {
  go_next_page();
})

span.addEventListener("click", (event)=> {
  modal.style.display="none";
  hide_buttons()
})
span_find.addEventListener("click", (event)=> {
  find_fruit.style.display="none";
  hide_buttons()
})

window.addEventListener("click", (event)=> {
  if ((event.target == modal) || (event.target ==find_fruit)) {
    modal.style.display = "none";
    find_fruit.style.display ="none";
    hide_buttons()
  }
})


export function selectFruits (){
  
  let i =0
  let j=0
  renderedFruits = []
  if(search_input.value.length != ""){
  for(i=0; i<5; i++){
    j = i+((page-1)*5)
    if (j>=filteredFruits.length){
      break;
    }
    renderedFruits.push(filteredFruits[j])
  }
  } else{
  for(i=0; i<5; i++){
    j = i+((page-1)*5)
    if (j>=fruits.length){
      break;
    }
    renderedFruits.push(fruits[j])
  }
}
}
export function selectFilteredFruits (){
  
  let i =0
  let j=0
  renderedFruits = []
  for(i=0; i<5; i++){
    j = i+((page-1)*5)
    if (j>=filteredFruits.length){
      break;
    }
    renderedFruits.push(filteredFruits[j])
  }
}

search_button.addEventListener("click",()=>{
  filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().search(search_input.value.toLowerCase()) !== -1);
  page = 1
  selectFruits()
  renderFruits()
})

function vibro_n_buzz() {
  let elemarr = document.getElementsByClassName("card");
    Array.prototype.forEach.call(elemarr, element =>{
      var audio = new Audio("./sound/11282__jovica__basic-triangle-wave-1-c2.wav");
audio.play()
    element.animate([
      // keyframes
      { transform: 'translate(25px, 25px)' },
      { transform: 'translate(-50px, -50px)' }
    ], {
      // timing options
      duration: 50,
      iterations: 6
    })});
}

function boink(elem){
  elem.animate([
    {transform: 'scale(1.5)'},
    {transform: 'scale(0.6)'}
  ],{
    duration:200,
    iterations:1
  })
}

function smoll_boink(){
  let current = document.getElementsByClassName('card')
  Array.prototype.forEach.call(current, fruit =>{
  fruit.animate([
    {transform: 'scale(1.1)'},
    {transform: 'scale(0.9)'}
  ],{
    duration:200,
    iterations:1
  })
})
}

function hide_buttons(){
  send_btn.style.display = "none"
  update_btn.style.display = "none"
}


Array.prototype.forEach.call( cardarray, card =>{
  card.addEventListener('mouseover', (event)=>{
    var audio = new Audio('./sound/bubble.mp3')
    audio.play() 
  })
})
function previous_page(){
  
  if (page>1){
    page--;
    selectFruits()
    renderFruits()
    boink(prev_page)
    boink(page_number)
    
    smoll_boink()
    }
    else{
      vibro_n_buzz()
    }
}
function go_next_page(){
  if (fruits.length/5.0 > page ) {
    page++;
    selectFruits()
    renderFruits()
    boink(next_page)
    boink(page_number)
    smoll_boink()
  } else {
    vibro_n_buzz()
  }
}
function compareNumbers(a, b) {
  return a.price - b.price;
}
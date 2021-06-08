const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");

let timeup = false; //false si pas fini et true si fini
let score = 0;
let lastCloud;


function randomTime(min, max){
   return Math.round(Math.random()*(max-min) + min);
}

function randomCloud(clouds){
    const index = Math.floor(Math.random() * clouds.length);
    const cloudSelect = clouds[index];
    
    if(cloudSelect === lastCloud){
        return randomCloud(clouds);
    }
    lastcloud = cloudSelect ;
    
    return cloudSelect;
}

function showHead1(){
    const time = randomTime(600, 1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeup) showHead1();
        cloud.classList.remove("up");
    }, time);
    
}
function showHead2(){
    const time = randomTime(500, 800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeup) showHead2();
        cloud.classList.remove("up");
    }, time);
    
}
function showHead3(){
    const time = randomTime(250, 600);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeup) showHead3();
        cloud.classList.remove("up");
    }, time);
    
}

function playRicky(event){
    if(!event.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}
heads.forEach(head => head.addEventListener("click", playRicky));


function startGame1() {
    scoreBoard.texteContent = 0;
    score = 0;
    timeup = false;
    showHead1();
    setTimeout(() =>{
        timeup = true;
        setTimeout(() => {
            scoreBoard.innerHTML = "eNd";
        }, 2000)
    }, 10000);

}

function startGame2() {
    scoreBoard.texteContent = 0;
    score = 0;
    timeup = false;
    showHead2();
    setTimeout(() =>{
        timeup = true;
        setTimeout(() => {
            scoreBoard.innerHTML = "eNd";
        }, 2000)
    }, 10000);

}

function startGame3() {
    scoreBoard.texteContent = 0;
    score = 0;
    timeup = false;
    showHead2();
    setTimeout(() =>{
        timeup = true;
        setTimeout(() => {
            scoreBoard.innerHTML = "eNd";
        }, 2000)
    }, 10000);

}


const speed = 50;
var i = 0;
var texte1 = "NOVICE";
var j = 0;
var texte2 = "APPRENTI";
var k = 0;
var texte3 = "EXPERT";

function typeWriter1(){
    
        if( i < texte1.length){
            document.getElementById("demo1").innerHTML += texte1.charAt(i);
            i++;
            setTimeout(typeWriter1, speed);
        }
}

function typeWriter2(){
        if( j < texte2.length){
            document.getElementById("demo2").innerHTML += texte2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed);
        }
}
function typeWriter3(){
    
        if( k < texte3.length){
            document.getElementById("demo3").innerHTML += texte3.charAt(k);
            k++;
            setTimeout(typeWriter3, speed);
        }

}

function myClick()
{
    for(var i = 1; i<= 3; i++){
        document.getElementById("demo"+i).addEventListener("click", function(){
            document.getElementById("demo1").style.display="none";
            document.getElementById("demo2").style.display="none";
            document.getElementById("demo3").style.display="none";
        })
    }
}
document.getElementById("morty-play").addEventListener("click", function(){
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
})





















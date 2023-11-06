"use strict"

let card = document.createElement("div")
card.className="card";

let h2_Content=document.createElement("h2");
h2_Content.innerHTML="Page Not Found"

let p_content_1=document.createElement("p");
p_content_1.innerText="Looks likes you've followed a broken link or"+
"entered a URL that doesn't exist on this page."

let Back_btn=document.createElement("a");
// Back_btn.setAttribute("href","index.html");


Back_btn.innerHTML="<span><</span>Back to our site.";
Back_btn.addEventListener("click",Back_Fun)
function Back_Fun(){
    window.location.href="index.html"
}

let hr=document.createElement("hr");

let p_content_2=document.createElement("p");
p_content_2.id="p_content_2"
p_content_2.innerHTML="if this is your site, and you weren't expecting a 404"+
"for this path, please visit Netlify's <q>page not found</q><br><span>support guide</span> for troubleshooting tips."

card.append(h2_Content,p_content_1,Back_btn,hr,p_content_2)
document.body.append(card)

let Nav_left=document.querySelector(".Nav_left")

let Right_btn=document.getElementById("Right_Btn")
let X_btn=document.getElementById("X_btn");
X_btn.addEventListener("click",Right_Fun)

Right_btn.addEventListener("click",Right_Fun)

let valid=0;
function Right_Fun(){

if(valid==0){
    Right_btn.classList.add("demo")
  Nav_left.classList.add("Nav");
  valid=1;
}
else{
    Right_btn.classList.remove("demo")
    Nav_left.classList.remove("Nav");
    Nav_left.classList.add("nav_1");
    valid=0;
}
}

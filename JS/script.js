const myText = document.querySelector(".myText");
const btn = document.querySelector(".btn");

btn.addEventListener('click',() =>{
myText.textContent = "Text changed successfully!"; 
 myText.style.color = "blueviolet"; 
});


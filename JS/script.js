// //  -- --- text change ---- --
// const myText = document.querySelector(".myText");
// const btn = document.querySelector(".btn");

// btn.addEventListener('click',() =>{
// myText.textContent = "Text changed successfully!"; 
//  myText.style.color = "blueviolet"; 
// });


// -- 2. Show / Hide Password --

const input = document.querySelector(".inputBtn");
const btns = document.querySelectorAll(".btn");

btns[0].addEventListener('click', () => {
    input.type = "text"
});
btns[1].addEventListener('click', () => {
    input.type = "password"
});
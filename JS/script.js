//  -- --- text change ---- --
// const myText = document.querySelector(".myText");
// const btn = document.querySelector(".btn");

// btn.addEventListener('click',() =>{
// myText.textContent = "Text changed successfully!"; 
//  myText.style.color = "blueviolet"; 
// });


// -- 2. Show / Hide Password --

// const input = document.querySelector(".inputBtn");
// const btns = document.querySelectorAll(".btn");

// btns[0].addEventListener('click', () => {
//     input.type = "text"
// });
// btns[1].addEventListener('click', () => {
//     input.type = "password"
// });

// -------------- or -----------------

// const input = document.querySelector(".inputBtn");
// const btn = document.querySelector(".btn");

// btn.addEventListener('click', () => {
//     if (input.type === "password") {
//         input.type = "text";
//         btn.textContent = "Hide";
//     } else {
//         input.type = "password";
//         btn.textContent = "Show";
//     }
// });


// ---------- 3.Odd or Even Checker ----------
// const inputBtn = document.querySelector(".inputBtn");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     const value = Number(inputBtn.value);
    
//     if (value % 2 === 0) {
//         resultText.textContent = "Even";
//         resultText.style.color = "green";
//     } else {
//         resultText.textContent = "Odd";
//         resultText.style.color = "red";
//     }
// });

// --------------- 4.Background Color Change------------

// const btns = document.querySelectorAll(".btn");

// btns[0].addEventListener('click', () => document.body.style.backgroundColor = "red");
// btns[1].addEventListener('click', () => document.body.style.backgroundColor = "green");
// btns[2].addEventListener('click', () => document.body.style.backgroundColor = "yellow");

// ---------- 5.Background Random Color Change -----------

// const btn = document.querySelector(".btn");
// const myText = document.querySelector(".myText");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = randomColor;
    
//     myText.style.color = "blueviolet";
//     resultText.textContent = "Background changed successfully!";
//     resultText.style.color = "green";
// });

// -- ------------- 6.Cart Add & Remove --------------- --


// const input = document.querySelector(".inputBtn");
// const btn = document.querySelector(".btn");
// const resetBtn = document.querySelector(".resetBtn");

// btn.addEventListener('click', () => {
//     if (input.type === "password") {
//         input.type = "text";
//         btn.textContent = "Hide";
//     } else {
//         input.type = "password";
//         btn.textContent = "Show";
//     }
// });

// resetBtn.addEventListener('click', () => {
//     input.value = "";
//     input.type = "password";
//     btn.textContent = "Show";
// });


// ----------- Light & Dark Mode -----------------

const myText = document.querySelector(".myText");
const btns = document.querySelectorAll(".btn");

btns[0].addEventListener('click', () => {
    document.body.classList.remove("dark-mode");
});

btns[1].addEventListener('click', () => {
    document.body.classList.add("dark-mode");
});

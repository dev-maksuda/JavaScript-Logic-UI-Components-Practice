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


// ----------- 7.Light & Dark Mode -----------------

// const myText = document.querySelector(".myText");
// const btns = document.querySelectorAll(".btn");

// btns[0].addEventListener('click', () => {
//     document.body.classList.remove("dark-mode");
// });

// btns[1].addEventListener('click', () => {
//     document.body.classList.add("dark-mode");
// });

// ------------- 8.Email Validation ------------------

// const inputBtn = document.querySelector(".inputBtn");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     const emailValue = inputBtn.value.trim();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailValue === "") {
//         resultText.textContent = "Please enter an email address!";
//         resultText.style.color = "orange";
//     } else if (emailPattern.test(emailValue)) {
//         resultText.textContent = "Valid Email Address!";
//         resultText.style.color = "green";
//     } else {
//         resultText.textContent = "Invalid Email Address!";
//         resultText.style.color = "red";
//     }
// });


// ---------------------- 9.Age Validation -----------------------
// const inputBtn = document.querySelector(".inputBtn");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     const ageValue = inputBtn.value.trim();
//     const age = Number(ageValue);

//     if (ageValue === "") {
//         resultText.textContent = "Please enter your age!";
//         resultText.style.color = "orange";
//     } else if (age < 0 || age > 200) {
//         resultText.textContent = "Please enter a valid age!";
//         resultText.style.color = "red";
//     } else if (age >= 18) {
//         resultText.textContent = "You are an Adult!";
//         resultText.style.color = "green";
//     } else {
//         resultText.textContent = "You are a Minor!";
//         resultText.style.color = "blueviolet";
//     }
// });

// ----------------- 10.Add Two Numbers ------------------

// const firstNum = document.querySelector(".first-num");
// const secondNum = document.querySelector(".second-num");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     if (firstNum.value === "" || secondNum.value === "") {
//         resultText.textContent = "Please enter both numbers!";
//         resultText.style.color = "orange";
//         return;
//     }

//     const total = Number(firstNum.value) + Number(secondNum.value);
//     resultText.textContent = "Result: " + total;
//     resultText.style.color = "green";
// });


// ------------------------- 11.Subtraction ----------------

// const firstNum = document.querySelector(".first-num");
// const secondNum = document.querySelector(".second-num");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     if (firstNum.value === "" || secondNum.value === "") {
//         resultText.textContent = "Please enter both numbers!";
//         resultText.style.color = "orange";
//         return;
//     }

//     const total = Number(firstNum.value) - Number(secondNum.value);
//     resultText.textContent = "Result: " + total;
//     resultText.style.color = "blueviolet";
// });

// ------------- 12.Multiplication -----------------------

// const firstNum = document.querySelector(".first-num");
// const secondNum = document.querySelector(".second-num");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     if (firstNum.value === "" || secondNum.value === "") {
//         resultText.textContent = "Please enter both numbers!";
//         resultText.style.color = "orange";
//         return;
//     }

//     const total = Number(firstNum.value) * Number(secondNum.value);
//     resultText.textContent = "Result: " + total;
//     resultText.style.color = "green";
// });

// --------------------- 13.Division -------------------

// const firstNum = document.querySelector(".first-num");
// const secondNum = document.querySelector(".second-num");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     if (firstNum.value === "" || secondNum.value === "") {
//         resultText.textContent = "Please enter both numbers!";
//         resultText.style.color = "orange";
//         return;
//     }

//     if (Number(secondNum.value) === 0) {
//         resultText.textContent = "Cannot divide by zero!";
//         resultText.style.color = "red";
//         return;
//     }

//     const total = Number(firstNum.value) / Number(secondNum.value);
//     resultText.textContent = "Result: " + total;
//     resultText.style.color = "blueviolet";
// });

// ----------------- 14.Find Large Number -------------
// const firstNum = document.querySelector(".first-num");
// const secondNum = document.querySelector(".second-num");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     if (firstNum.value === "" || secondNum.value === "") {
//         resultText.textContent = "Please enter both numbers!";
//         resultText.style.color = "orange";
//         return;
//     }

//     const num1 = Number(firstNum.value);
//     const num2 = Number(secondNum.value);

//     if (num1 > num2) {
//         resultText.textContent = num1 + " is larger";
//         resultText.style.color = "green";
//     } else if (num2 > num1) {
//         resultText.textContent = num2 + " is larger";
//         resultText.style.color = "blueviolet";
//     } else {
//         resultText.textContent = "Both numbers are equal";
//         resultText.style.color = "gray";
//     }
// });

// ----------------- 15.Find Small Number -----------------------

// const firstNum = document.querySelector(".first-num");
// const secondNum = document.querySelector(".second-num");
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
//     if (firstNum.value === "" || secondNum.value === "") {
//         resultText.textContent = "Please enter both numbers!";
//         resultText.style.color = "orange";
//         return;
//     }

//     const num1 = Number(firstNum.value);
//     const num2 = Number(secondNum.value);

//     if (num1 < num2) {
//         resultText.textContent = num1 + " is smaller";
//         resultText.style.color = "green";
//     } else if (num2 < num1) {
//         resultText.textContent = num2 + " is smaller";
//         resultText.style.color = "blueviolet";
//     } else {
//         resultText.textContent = "Both numbers are equal";
//         resultText.style.color = "gray";
//     }
// });
// --------------- 16.Ludo Dice Roller ------------------- 
// const btn = document.querySelector(".btn");
// const resultText = document.querySelector(".resultText");

// btn.addEventListener('click', () => {
  
//     const diceRoll = Math.floor(Math.random() * 6) + 1;
    
//     resultText.textContent = diceRoll;
//     resultText.style.color = "blueviolet";
// });

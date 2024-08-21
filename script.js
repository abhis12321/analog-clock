let hourHand = document.querySelector("#hour").childNodes[0];
let minuteHand = document.querySelector("#minute").childNodes[0];
let secondHand = document.querySelector("#second").childNodes[0];

let time = new Date();
let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

console.log(hours);

console.log(seconds);


secondHand.style.transform = `scale(0.6) rotate(${seconds * 6}deg)`;
minuteHand.style.transform = `scale(0.48) rotate(${minutes * 6}deg)`;
hourHand.style.transform = `scale(0.33) rotate(${hours * 30 + (minutes % 60) * .5}deg)`;

setInterval(() => {
    seconds = (seconds + 1) % 60;
    secondHand.style.transform = `scale(0.6) rotate(${seconds * 6}deg)`;
} , 1000);

setInterval(() => {
    minutes = (minutes + 1) % 60;
    hours = (hours + 1/60);
    minuteHand.style.transform = `scale(0.48) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `scale(0.33) rotate(${hours * 30 + (minutes % 60) * .5}deg)`;
} , 60000);

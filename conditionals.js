const username = process.argv[2];
if (username) {
    console.log("Hello", username)
}

let health = 100;
let money = 100;
const item = process.argv[3];
if (item === "jacket") {
    money -= 40;
    health += 20;
    console.log("you bought a jacket");
} else if (item === "candy") {
    money -= 40;
    health += 20;
    console.log("you bought a candy")
} else if (item === 'paint') {
    money -= 10;
    console.log("you bought a paint")
} else if (item === hammer) {
    money -= 70;
    console.log("you bought a hammer")
} else(console.log("You bought nothing"));

console.log("You have $" + money + " left")

console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You can run or stay");

const randomPerson = Math.random() > .5 ? "John" : "Felipe"
const message = process.argv[5];
const choice = process.argv[4];
if (!(choice)) {
    console.log("You shut down due to inactivity and get robbed of all your money")
} else if (choice !== "run" && randomPerson === "Felipe") {
    console.log("The protesters attack you");
    if (item != "jacket") {
        console.log("...but Felipe, a fellow android shows up to help you escape them");
    } else {
        console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
    }
} else if (choice == "run" && randomPerson === "John") {
    console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
    if (item === "hammer" || item === "jacket") {
        console.log("...and holds you for questioning for suspicious activity");
        money = 0;
    } else {
        console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");
    }
} else if (item === "paint") {
    console.log("You boldy protest by painting a pro-android message...");
    if (message) {
        console.log(message.toUpperCase());
    } else {
        console.log("....We are alive.....");
    }
} else {
    console.log("Nothing interesting happens, but at least you got that " + item);
}

let score = health + money;
if (choice) {
    score += 10;
}
if (message) {
    score += 10;
}

console.log("The end");
console.log("SCORE: " + score);
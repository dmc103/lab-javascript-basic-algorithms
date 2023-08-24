// Iteration 1: Names and Input
const hacker1 = "Zeynep";
const hacker2 = "Doreen";
console.log ("The driver's name is", hacker1);
console.log (`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log (`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker2Length > hacker1Length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2length} characters.`);
} else {
    console.log (`Wow, you both have equally long names, ${hacker1Length} characters!`);
}


// Iteration 3: Loops
//3.1
let hacker1Modified = " ";

for (let i = 0; i < hacker1.length ; i++) {
    if (i > 0) {
        hacker1Modified += " ";
    }
    hacker1Modified += hacker1[i].toUpperCase();
} 

console.log (hacker1Modified);


//console.log (hacker1.toUpperCase().split ('').join(' '));

//3.2

let hacker2Reverse = "";

for (let i = hacker2.length -1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}

console.log (hacker2Reverse);



//console.log (hacker2.split('').reverse().join(''));

// function 11 to 20
for (i = 11; i <= 20; i++) {
    console.log(i);
}
for (i = 20; i >= 11; i--){
    console.log(i);
}

let names = ["jānis", "james", "anna", "martin", "alex"];
console.log(names[1]);
console.log(names[3]);

let draugskaits = names.length;
for (let i = 0; i < draugskaits; i++) {  
    console.log(i + " " + names[i]);  
}
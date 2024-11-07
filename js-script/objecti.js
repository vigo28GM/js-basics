let persona = {
    vards: "gvido",
    vecums: 16,
    IsStudent: true,
    course: "PT_2024"
}   
console.log(persona.vards);
console.log(persona["vards"]);

if (persona.vecums >= 18 ) {
    console.log(persona.vards)("ir pilngadīgs");
} else {
    console.log("nav pilngadīgs");
}
if (persona.IsStudent == true) {
    console.log("ir Students");
} else {
    console.log("nav students");
}

console.log(persona.course);
console.log("WellCome to learning Node Technology");
console.log("Topic: External Modules");

const getRandomFruitsName = require("random-fruits-name");

console.log(getRandomFruitsName()); // Apple - English is default language
console.log(getRandomFruitsName("en")); // Apple
console.log(getRandomFruitsName("es")); // Manzana
console.log(getRandomFruitsName("ja")); // りんご
console.log(getRandomFruitsName("pt")); // Maça
console.log(getRandomFruitsName("nl")); // Appel
console.log(getRandomFruitsName("fr")); // Pomme
console.log(getRandomFruitsName("de")); // Apfel
console.log(getRandomFruitsName("cs")); // Jablko

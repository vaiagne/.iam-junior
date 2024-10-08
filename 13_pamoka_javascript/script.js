console.log("Agnė");

// 1 uzduotis

// const countryName = "Lietuva";
// const populationNumber = 2,832;
// const mostWomen = true;

let countryName = "Lithuania";
let populationNumberInMillions = 2.832;
let mostWomen = true;

console.log(countryName);
console.log(populationNumberInMillions);
console.log(mostWomen);

// 2 uzduotis

// Nusistatyti kintamuosius

let age = 18;
let isLithuanian = true;
let daysLivingInLithuania = 30;

//priskirti if

if (age >= 18 && isLithuanian && daysLivingInLithuania >= 30) {
    console.log (Jūs galite balsuoti.);
} else if (age <18) {
    console.log (Jūs negalite balsuoti. Per mažas amžius.);
} else if (isLithuanian) {
    console.log (Jūs negalite balsuoti. Nesate Lietuvos pilietis.);
} else if (daysLivingInLithuania <30) {
    console.log (Jūs negalite balsuoti. Gyvenate per mažai dienų Lietuvoje.);
}
    
// 3 uzduotis

let age = 28;
let bmi = 23;
let smokes = true;

let riskLevel1;
let advice;

if ( age <30 && bmi <25 && smokes) {
    riskLevel1 = "Maža rizika."
    advice = "Jūs esate fiziškai sveikas, rekomenduojama palaikyti aktyvumą, vengti žalą darančių medžiagų vartojimo.";
} else if (age >= 30 && age <= 50) && (bmi >=25 && bmi <30) && smokes) {
    riskLevel1 = "Vidutinė rizika.";
    advice = "Jūsų sveikata yra vidutinė. Rekomenduojama palaikyti aktyvesnį gyvenimo būdą bei prisižiūrėti mitybą."
} 
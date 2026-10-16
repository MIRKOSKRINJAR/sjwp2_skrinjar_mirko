/* let broj = 1;

while(broj <=10){
    console.log(broj);
    broj++;
} */

/* let n = prompt("Unesi broj");
let sum = 0;
for(let i = 1; i<=n; i++){
    console.log(i);
    sum+=i;
}
console.log("Suma je " + sum); */

/* let brojevi = [3, 4, 2, 4];
let suma = 0;
for(let i = 0; i<4; i++){
    suma+=brojevi[i];
}
console.log(brojevi);
console.log("Prosjek ocjena je " + suma / 4); */

/* let n = prompt("Unesi broj");
for(let i = 1; i<n; i++){
    if(i % 2 == 0){
        console.log("Parni broj "+ i);
    }
    else{
        console.log("Neparni broj" + i);
    }
} */

let polje = [12,7,25,4,19]
let max = polje[0]

for(let i = 0; i<polje.length; i++){
    if(polje[i] > max){
        max = polje[i];
    }
}

console.log(polje);
console.log("Najveci broj je " +max);
// listas de pronombres, adjetivos, sustantivos y extensiones
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

// diferentes extensiones
for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let ext of extensions) {
                console.log(p + a + n + ext);
            }
        }
    }
}

//domain hacks//
let domainHacks = [
    { base: 'puedes', hack: 'pued.es' },
    { base: 'jogger', hack: 'jogg.er' },
    { base: 'runner', hack: 'runne.r' }
];

for (let hack of domainHacks) {
    console.log(hack.hack);
}

console.log("Combinaciones de nombres de dominio generadas exitosamente.");
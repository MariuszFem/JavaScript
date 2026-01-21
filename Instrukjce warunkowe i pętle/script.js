function sprawdzLiczbeAstronautow(liczba) {
    return liczba % 2 === 0 ? "parzysta grupa" : "nieparzysta grupa";
}

function wynikTestuKosmicznego(punkty) {
    if (punkty >= 90) return "ekspert lotów";
    else if (punkty >= 80) return "starszy pilot";
    else if (punkty >= 70) return "pilot";
    else if (punkty >= 50) return "kadet";
    else return "dyskwalifikacja";
}

function dzienMisji(numer) {
    let nazwa;
    switch (numer) {
        case 1: nazwa = "poniedziałek - start"; break;
        case 2: nazwa = "wtorek - orbita"; break;
        case 3: nazwa = "środa - lot"; break;
        case 4: nazwa = "czwartek - lot"; break;
        case 5: nazwa = "piątek - lądowanie"; break;
        case 6: nazwa = "sobota - baza"; break;
        case 7: nazwa = "niedziela - odpoczynek"; break;
        default: nazwa = "nieprawidłowy dzień";
    }
    return nazwa;
}

let wiekKandydata = 25;
let statusRekrutacji = wiekKandydata >= 18 ? "zakwalifikowany" : "zbyt młody";

for (let i = 1; i <= 10; i++) {
    console.log("Poziom tlenu: " + (i * 10) + "%");
}

let sekundyDoStartu = 10;
while (sekundyDoStartu >= 0) {
    console.log("Odliczanie: " + sekundyDoStartu);
    sekundyDoStartu--;
}

const planety = ["Mars", "Jowisz", "Saturn", "Neptun"];
for (const planeta of planety) {
    console.log("Eksploracja: " + planeta);
}

const rakieta = { nazwa: "Starship", firma: "SpaceX", cel: "Mars" };
for (const cecha in rakieta) {
    console.log(cecha + ": " + rakieta[cecha]);
}

for (let m = 1; m <= 10; m++) {
    if (m === 3) continue;
    if (m === 8) break;
    console.log("Skanowanie sektora " + m);
}

function siatkaWspolrzednych() {
    for (let i = 1; i <= 10; i++) {
        let linia = "";
        for (let j = 1; j <= 10; j++) {
            linia += (i * j) + "\t";
        }
        console.log(linia);
    }
}

siatkaWspolrzednych();

console.log('Skrypt załadowany!');

console.log("--- TYPY DANYCH ---");

let imie = "Mariusz";
let wiek = 25;
let czyStudent = true;
let jezyki = ["JavaScript", "Python", "C++"];
let dane = { imie: "Mariusz", wiek: 25, miasto: "Kraków" }; 
let nic = null;
let nieokreslone;

console.log("Typ imię:", typeof imie);
console.log("Typ wiek:", typeof wiek);
console.log("Typ czyJestemStudentem:", typeof czyStudent);
console.log("Typ ulubioneJezyki:", typeof jezyki);
console.log("Typ daneOsobowe:", typeof dane);
console.log("Typ zmiennaNull:", typeof nic); 
console.log("Typ zmiennaUndefined:", typeof nieokreslone);


console.log("--- OPERATORY ---");

console.log("Dodawanie (10+3):", 10 + 3);
console.log("Odejmowanie (10-3):", 10 - 3);
console.log("Mnożenie (10*3):", 10 * 3);
console.log("Dzielenie (10/3):", 10 / 3);
console.log("Reszta z dzielenia - Modulo (10%3):", 10 % 3);
console.log("Potęgowanie (10 do potęgi 3):", 10 ** 3);

console.log("Porównanie '5' == 5:", '5' == 5); 
console.log("Porównanie '5' === 5:", '5' === 5);

console.log("Logiczne AND (true && false):", true && false);
console.log("Logiczne OR (true || false):", true || false);
console.log("Logiczne NOT (!true):", !true);



/* podsumowanie :
1. Typy danych: Wykorzystano String, Number, Boolean, Array, Object, null oraz undefined. 
2. typeof: Użyto do sprawdzenia typów
3. Operatory: 
   - Arytmetyczne: Wykonują obliczenia np. % to modulo czyli reszta z dzielenia.
   - Logiczne: && (i), || (lub), ! zaprzeczenie służą do budowania warunków.
4. Porównania:
   - == : Sprawdza tylko wartość np. tekstowe '5' jest równe liczbie 5.
   - === : Sprawdza wartość ORAZ typ danych jest bardziej bezpieczniejsze.
5. Konsola: Wszystkie wyniki są wypisane za pomocą console.log() co pozwala na debugowanie kodu.
*/
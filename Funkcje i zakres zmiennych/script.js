function powitanieTechnologii(nazwa) {
    return "Nauka technologii: " + nazwa;
}

const wyswietlTag = function(tag) {
    return "Element HTML: <" + tag + ">";
};

const czyWymagaZamkniecia = (czyTak) => czyTak ? "Tak" : "Nie";

(function() {
    console.log("System weryfikacji uruchomiony...");
})();

function dodajWierszTabeli(nazwa = "Nieznany", przeznaczenie = "Brak opisu") {
    return "Dodano: " + nazwa + " - " + przeznaczenie;
}

function wymienWszystkieTagi(...tagi) {
    return "Wszystkie tagi: " + tagi.join(", ");
}

function pobierzDaneTabeli(id) {
    return {
        tabelaId: id,
        wiersze: 5,
        czyWidoczna: true,
        klasa: "highlight"
    };
}

function przetworzTag(nazwaTagu, callback) {
    const wynik = "Tag " + nazwaTagu;
    return callback(wynik);
}

function stworzGeneratorListy(typListy) {
    return function(element) {
        return "Dodano <" + element + "> do listy " + typListy;
    };
}

function demonstracjaZasiegow() {
    for (var i = 0; i < 3; i++) {}
    console.log("var i poza pętlą: " + i);

    for (let j = 0; j < 3; j++) {}
}

{
    const blokowa = "Tylko w klamrach";
    let tezBlokowa = "Ja też";
    var nieBlokowa = "Zasięg globalny/funkcyjny";
}

function stworzLicznikTagow() {
    let liczbaTagow = 0;
    return function() {
        liczbaTagow++;
        return "Liczba przetworzonych tagów: " + liczbaTagow;
    };
}

const licznik = stworzLicznikTagow();
console.log(licznik());
console.log(licznik());
const generatorOL = stworzGeneratorListy("ordered");
console.log(generatorOL("li"));
console.log(wymienWszystkieTagi("p", "img", "a"));
demonstracjaZasiegow();

/*
1. Deklaracje: Wykorzystano Function Declaration, Expression, Arrow Function oraz IIFE.
2. Parametry: Zastosowano wartości domyślne oraz operator rest (...).
3. Funkcje wyższego rzędu: Zrealizowano callback oraz zwracanie funkcji przez funkcję.
4. Zasięg i domknięcia: Pokazano różnicę między var (funkcyjny) a let/const (blokowy).
5. Closure: Funkcja stworzLicznikTagow tworzy trwały stan zmiennej liczbaTagow dzięki domknięciu.
*/
/* alert(`uwaga!!!!`) */
const wiek = 47;
const Zbyszek = "Zbyszek";
const Piotrek = "Piotrek";
const wiek_P = 30;
console.log('witaj mam lat:', wiek);
console.log('kto jest starszy?');


if (wiek > wiek_P) {
    console.log(`starszy jest: ${Zbyszek} bo ma ${wiek} lat.`);
} else {
    console.log(`starszy jest: ${Piotrek} bo ma ${wiek_P} lat.`);
}

const paragraf_js = document.querySelector('.week__notes--js')

paragraf_js.innerHTML = `- document.QuerySelector('.selector') - dostanie się do elementu<br>
- .innerHTML wstrzyknięcie do wewnętrznego html,<br>
- console.log(elenentxxx.innerHTML) - wypisuje w konsoli wewnętrzny
html`

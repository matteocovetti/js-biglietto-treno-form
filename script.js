const scontoGiovani = 0.2;
const scontoAnziani = 0.4;
const prezzoBase = 0.21;



const form = document.getElementById('form');
form.addEventListener('submit', calcPrezzo);



function calcPrezzo(event){
    event.preventDefault();

    const km = document.getElementById('km-input').value;
    const eta = document.getElementById('eta-input').value;

    let prezzoBiglietto = km * prezzoBase;

    if(eta < 18){
        prezzoBiglietto -= prezzoBiglietto * scontoGiovani;
    }
    if(eta > 65){
        prezzoBiglietto -= prezzoBiglietto * scontoAnziani;
    }
    // console.log(prezzoBiglietto);
}

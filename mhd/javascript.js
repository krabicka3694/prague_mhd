
function ukazCas() {
    let cas = new Date;

    let hodin = ""+ cas.getHours();
    let minut = ""+ cas.getMinutes();
    let vterin = ""+ cas.getSeconds();

    let spojenyCas = cas.toLocaleTimeString()

    document.getElementById ("hodiny").innerHTML = spojenyCas;
}
 
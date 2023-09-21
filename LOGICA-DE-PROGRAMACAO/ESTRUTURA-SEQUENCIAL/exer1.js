let hrb, hrf

hrb = Number(prompt("Informe a hora no brasil em formato HH.MM"))

//validar
if(isNaN(hrb) || hrb < 0){
    alert("digite um horário válido")
    location.reload
}
//logica
hrf = hrb + 5
    if(hrf >24){
        hrf = hrf - 24
    }

    alert(`Hora no Brsil ${hrb} hora frança ${hrf}}`)
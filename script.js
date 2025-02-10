const rs = document.getElementById('rs');
const tel = document.getElementById('tel');
const rfc = document.getElementById('rfc');
const contact = document.getElementById('contact');
const mail = document.getElementById('mail');


rs.addEventListener('change',()=>{
    const alertL  = document.getElementById('rs-avis');

    if(!rs.value){
        alertLabel(alertL,"Necesitas ingresar una razon social")
        return;
    }
    alertLabel(alertL,"");
})

tel.addEventListener('change',()=>{
    const alertL  = document.getElementById('tel-avis');

    if(!tel.value){
        alertLabel(alertL,"Necesitas ingresar una telefono")
        return;
    }
    if(!(tel.value.toString().charAt(0) == "+")){
        alertLabel(alertL,"No tiene el signo +")
        return;
    }
    if(tel.value.toString().length > 13){
        alertLabel(alertL,"No pueden ser mas de 13 valores")
        return;
    }
    if(tel.value.toString().length < 13){
        alertLabel(alertL,"Numero de telefono incompleto")
        return;
    }
    alertLabel(alertL,"");
})

function alertLabel(label,text){
    label.innerText = text;
}
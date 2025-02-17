const rs = document.getElementById('rs');
const tel = document.getElementById('tel');
const rfc = document.getElementById('rfc');
const contact = document.getElementById('contact');
const mail = document.getElementById('mail');
const forms = document.getElementById('forms');
const button = document.getElementById('button');
button.style.backgroundColor = 'gray';
button.style.filter = 'blur(.7px)';


function alertLabel(label, text) {
    label.innerText = text;
    label.style.color = 'red';
    label.setAttribute('class','text-sm')
}
function verificRS() {
    const alertL = document.getElementById('rs-avis');
    if (!rs.value) {
        alertLabel(alertL, "Necesitas ingresar una razon social")
        return false;
    }
    alertLabel(alertL, "");
    return true;

}

function verificTel() {
    const alertL = document.getElementById('tel-avis');
    if (!tel.value || tel.value == "") {
        alertLabel(alertL, "Necesitas ingresar una telefono")
        return false;
    }
    if (!(tel.value.toString().charAt(0) == "+")) {
        alertLabel(alertL, "No tiene el signo +")
        return false;
    }
    if (tel.value.toString().length > 13) {
        alertLabel(alertL, "No pueden ser mas de 13 valores")
        return false;
    }
    if (tel.value.toString().length < 13) {
        alertLabel(alertL, "Numero de telefono incompleto")
        return false;
    }
    alertLabel(alertL, "");
    return true;

}

function verificRFC() {
    const rfcEmpresaRegex = /^[A-ZÑ&]{3}\d{6}[A-Z0-9]{3}$/;

    const alertL = document.getElementById('rfc-avis');

    if (!rfc.value) {
        alertLabel(alertL, "Necesitas ingresar un rfc empresarial")
        return false;
    }
    if (!rfcEmpresaRegex.test(rfc.value)) {
        alertLabel(alertL, "Formato de RFC no valido")
        return false;
    }
    alertLabel(alertL, "");
    return true;

}

function verificMail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const alertL = document.getElementById('mail-avis');

    if (!mail.value) {
        alertLabel(alertL, "Necesitas ingresar un correo electronico")
        return false;
    }
    if(!emailRegex.test(mail.value)){
        alertLabel(alertL, "Correo electronico invalido")
        return false;
    }
    alertLabel(alertL, "");
    return true;

}

function verificContact() {
    const alertL = document.getElementById('contact-avis');

    if (!contact.value) {
        alertLabel(alertL, "Necesitas ingresar un contacto")
        return false;
    }
    alertLabel(alertL, "");
    return true;

}


forms.addEventListener('submit', (event) => {
    if (allVerific()) return
    event.preventDefault();
})


function allVerific() {
    if (verificRS() &&
        verificTel() &&
        verificRFC() &&
        verificMail() &&
        verificContact()) {
        button.style.backgroundColor = '';
        button.style.filter = 'blur(0px)';

        return true
    }

    rs.addEventListener('change', () => allVerific())

    tel.addEventListener('change', () => allVerific())

    contact.addEventListener('change', () => allVerific())

    mail.addEventListener('change', () => allVerific())

    rfc.addEventListener('change', () => allVerific())

    button.style.backgroundColor = 'gray';
    return false

}
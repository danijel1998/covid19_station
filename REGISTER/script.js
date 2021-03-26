function submitForm() {
    var idNumber = document.getElementById('id');
    var idCard = document.getElementById('idCard');

    var inputElements = document.getElementsByTagName('input');
    if(idNumber.value.length < 13 || idCard.value.length == 0)
    {
        for(var i = 0;i<inputElements.length; i++)
        {
            inputElements[i].value = "";
        }
        idNumber.classList.remove('is-valid');
        idNumber.classList.remove('is-invalid');
        idCard.classList.remove('is-valid');
        idCard.classList.remove('is-invalid');
        return false;
    }
    else
        return true;
}

function idCheck() {
    var idNumber = document.getElementById('id');

    if(idNumber.value.length < 13)
    {
        idNumber.classList.remove('is-valid');
        idNumber.classList.add('is-invalid');
    }
    else
    {
        idNumber.classList.remove('is-invalid');
        idNumber.classList.add('is-valid');
    }
}

function idCardCheck() {
    var idCard = document.getElementById('idCard');
    if(idCard.value.length == 0)
    {
        idCard.classList.remove('is-valid');
        idCard.classList.add('is-invalid');
    }
    else
    {
        idCard.classList.remove('is-invalid');
        idCard.classList.add('is-valid');
    }
}
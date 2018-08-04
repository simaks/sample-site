function toggleFieldValidity(field, valid) {
    if (valid) {
        field.classList.remove('has-error');
    } else {
        field.classList.add('has-error');
    }
}

function isFieldValid(field) {
    var input = field.getElementsByClassName('form-field__input')[0];

    if (input.getAttribute('required') != null && input.value.length == 0) {
        return false;
    }

    toggleFieldValidity(field, true);
    return true;
}

var form = document.getElementById('contact-form');
function isFormValid(form) {
    var fields = form.getElementsByClassName('form-field');
    var formValid = true;
    for (var i = 0; i < fields.length; i++) {
        var fieldValid = isFieldValid(fields[i]);
        toggleFieldValidity(fields[i], fieldValid);
        formValid = formValid && fieldValid;
    }
    return formValid;
}

form.addEventListener('submit', function (event) {
    if (!isFormValid(event.target)) {
        event.preventDefault();
    }
});

form.setAttribute('novalidate', 'novalidate');

var form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    if (!isFormValid(event.target)) {
        event.preventDefault();
    }
});

form.setAttribute('novalidate', 'novalidate');

/**
 * Toggle fields has-error class, depending on its validity
 * @param {HTMLElement} field 
 * @param {boolean} valid 
 */
function toggleFieldValidity(field, valid) {
    if (valid) {
        field.classList.remove('has-error');
    } else {
        field.classList.add('has-error');
    }
}

/**
 * Check if fields is valid
 * @param {HTMLElement} field
 * @returns {boolean}
 */
function isFieldValid(field) {
    var input = field.getElementsByClassName('form-field__input')[0];

    if (input.getAttribute('required') != null && input.value.length == 0) {
        return false;
    }

    toggleFieldValidity(field, true);
    return true;
}

/**
 * Check if form is valid
 * @param {HTMLFormElement} form 
 * @returns {boolean}
 */
function isFormValid(form) {
    var fields = form.getElementsByClassName('form-field');
    var formValid = true;
    for (var i = 0; i < fields.length; i++) {
        var fieldValid = isFieldValid(fields[i]);
        toggleFieldValidity(fields[i], fieldValid);
        formValid = formValid && fieldValid;
    }
    if (!formValid) {
        // focus first invalid input
        form.getElementsByClassName('has-error')[0].getElementsByClassName('form-field__input')[0].focus();
    }
    return formValid;
}

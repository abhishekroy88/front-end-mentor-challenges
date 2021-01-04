const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    const fName = form['first-name'];
    const lName = form['last-name'];
    const email = form['email'];
    const password = form['password'];

    if (!fName.value || 
        !lName.value || 
        !email.value || 
        !isValid(email.value) || 
        !password.value) {
            
            e.preventDefault();
            
            if (!fName.value) {
                addErrorsTo(fName, 'error');
            } else {
                removeErrorsFrom(fName);
            }
        
            if (!lName.value) {
                addErrorsTo(lName, 'error');
            } else {
                removeErrorsFrom(lName);
            }
        
            if (!email.value) {
                addErrorsTo(email, 'mandatory-field-error');
            } else if (!isValid(email.value)) {
                addErrorsTo(email, 'validation-error');
            } else {
                removeErrorsFrom(email);
            }
        
            if (!password.value) {
                addErrorsTo(password, 'mandatory-field-error');
            } else {
                removeErrorsFrom(password);
            }
    } else {
        alert('Form okay for submission.');
    }
});

function addErrorsTo (element, errorClassName) {
    removeErrorsFrom(element);

    element.parentNode.classList.add('has-error');

    const errorComponents = element.parentNode.getElementsByClassName(errorClassName);

    for (let component of errorComponents) {
        component.classList.remove('invisible');
    }

    if (errorClassName !== 'error') {
        element.parentNode.querySelector('img').classList.remove('invisible');
    }
}

function removeErrorsFrom (element) {
    element.parentNode.classList.remove('has-error');

    const errorComponents = element.parentNode.getElementsByClassName('error');

    for (let component of errorComponents) {
        component.classList.add('invisible');
    }
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

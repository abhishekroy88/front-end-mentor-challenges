const form = document.querySelector('form');
const email = form['email'];

form.addEventListener('submit', (e) => {
    if (!email.value || 
        !isValidEmail(email.value)) {
        
        e.preventDefault();

        addErrorTo(email);
    } else {
        removeErrorFrom(email);
        alert('Form okay for submission.');
    }
});

function addErrorTo(element) {
    form.classList.add('has-error');

    const errorComponents = element.parentNode.getElementsByClassName('error');

    for (let component of errorComponents) {
        if (component.classList.contains('invisible')) {
            component.classList.remove('invisible');
        }
    }
}

function removeErrorFrom(element) {
    form.classList.remove('has-error');

    const errorComponents = element.parentNode.getElementsByClassName('error');

    for (let component of errorComponents) {
        if (!component.classList.contains('invisible')) {
            component.classList.add('invisible');
        }
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
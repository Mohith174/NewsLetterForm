const scriptURL = 'https://script.google.com/macros/s/AKfycbyz9LRvPP8R1JgrsgSGANJcU20UMVfQnCw14pIqdNHGs6aTCCYgL72f8ZKZB0QN8Rlq/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById("message");

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
        message.innerHTML = "Please fill in all required fields and agree to the terms.";
        return;
    }
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "Thank you for subscribing!";
            setTimeout(() => { message.innerHTML = "" }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

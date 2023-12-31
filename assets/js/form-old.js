function validation(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('submit-email-form').addEventListener('click', function(event) {
    event.preventDefault();

    var email = document.querySelector('#submit-email input').value;

    if (validation(email)) {
        fetch('https://60jg71nvag.execute-api.us-east-1.amazonaws.com/prod/invite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            if(data.message === "Invitation sent.") {
                document.getElementById('invitation-sent').style.display = 'block';
            } else if(data.message === "Invitation pending.") {
                document.getElementById('invitation-pending').style.display = 'block';
            } else if(data.message === "Invitation already.") {
                document.getElementById('invitation-already').style.display = 'block';
            } else {
                document.getElementById('invitation-error').style.display = 'block';
            }
        })
        .catch(error => {
            document.getElementById('invitation-error').style.display = 'block';
            console.error('Error:', error);
        });
    } else {
        document.getElementById('invitation-email-format').style.display = 'block';
    }
});

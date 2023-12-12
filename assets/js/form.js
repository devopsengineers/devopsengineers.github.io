// Function to validate email using regex
function validateEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

// Event listener for form submission
document.getElementById('submit-email-form').addEventListener('click', function(event) {
  event.preventDefault();

  const email = document.querySelector('#submit-email input').value;

  if (validateEmail(email)) {
    fetch('https://60jg71nvag.execute-api.us-east-1.amazonaws.com/prod/invite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => handleResponse(data))
    .catch(error => handleError(error));
  } else {
    document.getElementById('invitation-email-format').style.display = 'block';
  }
});

// Handle response from fetch
function handleResponse(data) {
  if (data.message === "Invitation sent.") {
    displayElement('invitation-sent');
  } else if (data.message === "Invitation pending.") {
    displayElement('invitation-pending');
  } else if (data.message === "Invitation already.") {
    displayElement('invitation-already');
  } else {
    displayElement('invitation-error');
  }
}

// Handle error from fetch
function handleError(error) {
  displayElement('invitation-error');
  console.error('Error:', error);
}

// Display a specific element
function displayElement(elementId) {
  document.getElementById(elementId).style.display = 'block';
}

// Event listener for document ready
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("slackModal");
  const btns = document.querySelectorAll(".slackReqModalBtn");
  const crossBtn = document.getElementById("slackCrossBtn");
  const closeBtn = document.getElementById("slackCloseBtn");
  const slackReqMessages = document.querySelectorAll(".slack-req-message");

  btns.forEach(btn => {
    btn.addEventListener("click", () => toggleModal(modal, false));
  });

  crossBtn.addEventListener("click", () => toggleModal(modal, true));
  closeBtn.addEventListener("click", () => toggleModal(modal, true));

  window.addEventListener("click", event => {
    if (event.target === modal) {
      toggleModal(modal, true);
    }
  });
});

// Toggle modal display
function toggleModal(modal, hide) {
  if (hide) {
    modal.classList.add("hidden");
  } else {
    modal.classList.remove("hidden");
  }
  document.querySelectorAll(".slack-req-message").forEach(element => {
    element.style.display = "none";
  });
}

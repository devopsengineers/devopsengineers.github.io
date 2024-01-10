function validation(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function validation(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

document.querySelectorAll(".submit-email-form").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    var modal = button.closest(".relative");
    var email = modal.querySelector('input[type="email"]').value;

    // Show 'please wait' message
    var waitMessage = modal.querySelector("#invitation-wait");
    if (waitMessage) waitMessage.style.display = "block";

    if (validation(email)) {
      fetch("https://60jg71nvag.execute-api.us-east-1.amazonaws.com/prod/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Update these selectors to be specific to the modal
          var modalId = modal.id;
          if (data.message === "Invitation sent.") {
            modal.querySelector("#invitation-sent").style.display = "block";
          } else if (data.message === "Invitation pending.") {
            modal.querySelector("#invitation-pending").style.display = "block";
          } else if (data.message === "Invitation already.") {
            modal.querySelector("#invitation-already").style.display = "block";
          } else {
            modal.querySelector("#invitation-error").style.display = "block";
          }

          // Hide 'please wait' message
          if (waitMessage) waitMessage.style.display = "none";
        })
        .catch((error) => {
          modal.querySelector("#invitation-error").style.display = "block";
          console.error("Error:", error);

          // Hide 'please wait' message
          if (waitMessage) waitMessage.style.display = "none";
        });
    } else {
      modal.querySelector("#invitation-email-format").style.display = "block";
      // Hide 'please wait' message
      if (waitMessage) waitMessage.style.display = "none";
    }
  });
});

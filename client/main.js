const messageForm = document.getElementById("messageForm");

function handleSubmission(e) {
  e.preventDefault();
  console.log("form submitted");

  const formSubmission = new FormData(messageForm);
  const message = formSubmission.get("message");

  fetch("http://localhost:4040/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
}

messageForm.addEventListener("submit", handleSubmission);

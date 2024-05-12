let messageInput = document.getElementById("message");
let sendButton = document.getElementById("sendMessage");
let webhookURL = document.getElementById("webhook");

let message = "";
let webhook = "";

sendButton.addEventListener("click", function () {
  message = messageInput.value;
  webhook = webhookURL.value;
  if (message == "" || webhook == "") {
    alert(
      "You must provide a webhook URL or type a message before sending anything!"
    );
  } else {
    webhook = webhookURL.value;
    message = messageInput.value;
    fetch(webhook, {
      body: JSON.stringify({
        content: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then(function (res) {
        if (res.ok) {
          alert("Message sent successfully!");
        } else {
          throw new Error("Failed to send message: " + res.statusText);
        }
      })
      .catch(function (error) {
        alert("Make sure the URL you're using is valid");
      });
  }
});

function handleInput(element) {
  const placeholder = element.nextElementSibling;
  if (element.value.trim() !== "") {
    placeholder.style.display = "none";
  } else {
    placeholder.style.display = "block";
  }
}

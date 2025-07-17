let clickCount = 0;

function shareOnWhatsApp() {
  if (clickCount >= 5) return;

  const message = "Hey Buddy, Join Tech For Girls Community";
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');

  clickCount++;
  const counterDisplay = document.getElementById("counterDisplay");

  if (clickCount >= 5) {
    counterDisplay.textContent = "Sharing complete. Please continue.";
  } else {
    counterDisplay.textContent = `Click count: ${clickCount}/5`;
  }
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  if (clickCount < 5) {
    alert("Please complete WhatsApp sharing (5/5) before submitting.");
    return;
  }

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const college = document.getElementById("college").value;
  const file = document.getElementById("screenshot").files[0];

  console.log("Form Data Collected:", { name, phone, email, college, file });

  document.getElementById("registrationForm").classList.add("disabled");
  document.querySelectorAll("input, button, select").forEach(el => el.disabled = true);

  document.getElementById("successMessage").style.display = "block";
});

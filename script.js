document.getElementById("calculateBtn").addEventListener("click", function() {
  // Array of all radio group names
  const groups = [
    "trimInput", "sanitizeInput",
    "strongPassword", "limitPassword", "secureStorage", "mandatoryUpdate", "sso",
    "utf8", "copyPaste", "cookies",
    "leastPrivilege", "userRoles", "logging",
    "mvc", "captcha"
  ];
  
  let totalScore = 0;

  // Loop through each group and add the selected value (as an integer)
  for (let group of groups) {
    const radios = document.getElementsByName(group);
    let selected = false;
    for (let radio of radios) {
      if (radio.checked) {
        totalScore += parseInt(radio.value, 10);
        selected = true;
        break;
      }
    }
    if (!selected) {
      alert("Please answer all questions before calculating the risk score.");
      return;
    }
  }

  // Determine risk level based on total score
  let riskLevel = "";
  if (totalScore <= 5) {
    riskLevel = "Low Risk";
  } else if (totalScore <= 10) {
    riskLevel = "Medium Risk";
  } else if (totalScore <= 15) {
    riskLevel = "High Risk";
  } else {
    riskLevel = "Critical Risk";
  }

  // Display the result
  document.getElementById("result").innerText =
    `Your risk score is: ${totalScore} (${riskLevel})`;
});


// Get modal elements
const modal = document.getElementById("infoModal");
const modalText = document.getElementById("modalText");
const spanClose = document.querySelector(".modal .close");

// Function to open modal with custom text
function openModal(text) {
  modalText.innerText = text;
  modal.style.display = "block";
}

// Close modal when clicking on the close button
spanClose.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Example: Attaching info button events (assuming each question has an info button with class 'info-btn')
document.querySelectorAll(".info-btn").forEach(button => {
  button.addEventListener("click", function() {
    // Customize this text per question
  //  openModal("Here is some explanation and recommendations for this best practice.");
  });
});

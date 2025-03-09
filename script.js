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
  } else if (totalScore <= 15) {
    riskLevel = "Moderate Risk";
  } else {
    riskLevel = "High Risk";
  }

  // Display the result
  document.getElementById("result").innerText =
    `Your risk score is: ${totalScore} (${riskLevel})`;
});

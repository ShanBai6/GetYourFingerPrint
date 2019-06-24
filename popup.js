
document.getElementById("submitButton").addEventListener("click", addFingerprint);
document.getElementById("searchButton").addEventListener("click", searchFingerprint);

function addFingerprint() {
  var fingerprint = document.getElementById("result").value
  var deviceType = document.getElementById("deviceType").value
  console.log("fingerprint: " + fingerprint + "device Type: " + deviceType)

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:8888", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(
    {
      fingerprint: fingerprint,
      deviceType: deviceType
    }
  )
  );
  console.log("Sent")

  //Get the latest fingerprint
  xhr = new XMLHttpRequest();
  xhr.addEventListener("load", getResponse)
  xhr.open('GET', "http://127.0.0.1:8888", true);
  xhr.send();
  console.log("GET sent")
  //document.execCommand("copy", false, null);

}

function getResponse() {
  //receive as string
  console.log(this.responseText)

  //TODO: Process this to update the db.
}

function searchFingerprint() {
  chrome.tabs.executeScript({ file: "sonar.js" }, function () {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
    console.log("Execution done")
  });
  //myTextArea.innerHTML = '';

}
// Function to perform the Caesar cipher
function caesarCipher(str, shift) {
  // Convert shift to a positive value within the range [0, 26)
  shift = ((shift % 26) + 26) % 26;

  return str.replace(/[a-z]/gi, function (char) {
    // Determine the ASCII code offset for uppercase or lowercase letters
    var offset = char < "a" ? 65 : 97;

    // Shift the current character and wrap around the alphabet if necessary
    return String.fromCharCode(
      ((char.charCodeAt(0) - offset + shift) % 26) + offset
    );
  });
}

// Function to handle the form submission
function handleCipher() {
  // Get the original message from the form
  var originalMessage = document.getElementById("original-message").value;

  // Get the shift value from the form, default to 0 if not a number
  var shiftInput = document.getElementById("shift").value;
  var shiftValue = shiftInput ? parseInt(shiftInput, 10) : 0;

  // Encrypt the original message
  var encryptedMessage = caesarCipher(originalMessage, shiftValue);

  // Display the encrypted message
  document.getElementById("encrypted-message").value = encryptedMessage;
}

// Add event listener for when the user changes the text or the shift value
document
  .getElementById("original-message")
  .addEventListener("input", handleCipher);
document.getElementById("shift").addEventListener("input", handleCipher);

// Initialize the cipher with the default form values on page load
window.addEventListener("load", handleCipher);

// Popup Code----------------------------------------------------------------
// Get the modal
var modal = document.getElementById("infoModal");

// Get the button that opens the modal
var btn = document.getElementById("infoButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

btn.onclick = function() {
    console.log("Button clicked");
    modal.style.display = 'block';
};
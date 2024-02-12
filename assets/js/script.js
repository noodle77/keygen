// This function checks if a checkbox is checked. If it is, an array of 
// characters is returned, but if it's not, an empty array is returned.
function handleCheckbox(checkbox, characters) {
  if ($(checkbox).is(':checked')) {
    return characters;
  } else {
    return [];
  };
}

// This function is called in genKey based off the "Capitals" checkbox. It returns an 
// array of capital letters or an empty array, depending on whether its checkbox is checked.
function addCapitals(checkbox) {
  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return handleCheckbox(checkbox, uppercase);
}

// This function is called in genKey based off the "Numbers" checkbox. It returns an 
// array of numbers 0-9 or an empty array, depending on whether its checkbox is checked.
function addNumbers(checkbox) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return handleCheckbox(checkbox, numbers);
}

// This function is called in genKey based off the "Specials" checkbox. It returns an 
// array of special characters or an empty array, depending on whether its checkbox is checked.
function addSpecials(checkbox) {
  const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '.', ',', '?', ':', ';'];
  return handleCheckbox(checkbox, specials);
}

// This function generates a key. It first gets the desired key length from the #keylength input field.
// Then it creates an array of lowercase letters, and depending on which checkboxes are checked, it adds 
// capital letters, numbers, and/or special characters to that array. Finally, it generates a key of 
// the desired length using random characters from the resultant master array.
function genKey() {
  const x = Number($("#keylength").val());
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let characters = [...lowercase];
  characters = characters.concat(addCapitals($("#caps")), addNumbers($("#nums")), addSpecials($("#specs")));

  let key = "";
  for (let i = 0; i < x; i++) {
    key += characters[Math.floor(Math.random() * characters.length)];
  };
    
  return key;
}

// This function is called with "Generate Key" button is clicked due to the event listener below.
// It calls genKey to generate a key string and displays that string in the #key field.
function displayKey() {
  var key = genKey();

  $("#key").val(key);
}

// This is the event listener which calls displayKey when the "Generate Key" button is pressed.
$("#generate").on("click", displayKey);
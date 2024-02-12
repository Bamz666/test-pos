function countLetterOccurrences(string) {
  string = string.toLowerCase();

  var letterCount = {};

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  var output = "";
  for (var letter in letterCount) {
    output += letter + "=" + letterCount[letter] + ", ";
  }

  output = output.slice(0, -2);

  return output;
}

console.log(countLetterOccurrences("We Always Mekar"));
console.log(countLetterOccurrences("coding is fun"));

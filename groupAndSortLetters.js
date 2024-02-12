function groupAndSortLetters(words) {
  var letterCount = {};

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    word = word.toLowerCase();
    for (var j = 0; j < word.length; j++) {
      var letter = word[j];
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  var sortedLetters = Object.keys(letterCount).sort(function (a, b) {
    if (letterCount[a] !== letterCount[b]) {
      return letterCount[b] - letterCount[a];
    } else {
      return a.localeCompare(b);
    }
  });

  var result = sortedLetters.join("");

  return result;
}

console.log(groupAndSortLetters(["Abc", "bCd"]));
console.log(groupAndSortLetters(["Oke", "One"]));
console.log(
  groupAndSortLetters([
    "Pendanaan",
    "Terproteksi",
    "Untuk",
    "Dampak",
    "Berarti",
  ])
);

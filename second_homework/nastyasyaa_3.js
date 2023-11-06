function sortLettersInWords(words, sortedWords) {

    for (let word of words) {
        word = word.split('').sort().join('');
        sortedWords.push(word)
    }

}
function checkIfArrayHasWord(groupedAnagrams, j, words) {

    for (let arr of groupedAnagrams) {
        if (arr.includes(words[j])) {
            return true;
        }
    }

}
function groupAnagrams(words) {

    let sortedWords = [];
    let groupedAnagrams = [];
    let anagrams = [];

    sortLettersInWords(words, sortedWords)
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (!checkIfArrayHasWord(groupedAnagrams, j, words)) {
                if (sortedWords[i] === sortedWords[j]) {
                    anagrams.push(words[j]);
                }
            }
        }

        if (anagrams.length !== 0) {
            groupedAnagrams.push(anagrams);
        }
        anagrams = [];
    }
    return groupedAnagrams;
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))
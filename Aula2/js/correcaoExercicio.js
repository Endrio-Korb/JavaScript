const words = ['Filipe', 'Proway', 'Programação']

function findLongestWord(words) {
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(findLongestWord(words))

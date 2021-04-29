const isPalindrome = (word) => {
    if (word === '') throw new Error('empty strings are not palindromes');
    let wordForward = word.trim().split('');
    let wordBackward = wordForward.reverse().join('');
    if (wordBackward === '') return false;
    return word === wordBackward;
};

module.exports = { isPalindrome };
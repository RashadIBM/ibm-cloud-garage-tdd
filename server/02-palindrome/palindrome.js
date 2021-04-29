const isPalindrome = (word) => {
    let wordForward = word.trim().split('');
    let wordBackward = wordForward.reverse().join('');
    return word === wordBackward;
};

module.exports = { isPalindrome };
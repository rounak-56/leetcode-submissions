/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i = 0; i < s.length / 2; i++) {
        const j = s.length - i - 1;

        [s[i], s[j]] = [s[j], s[i]];
    }
};
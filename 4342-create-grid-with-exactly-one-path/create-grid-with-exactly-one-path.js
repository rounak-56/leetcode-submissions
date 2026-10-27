/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    // The examples are misleading, the condition is that path should start at (0, 0) and end at (m - 1, n - 1)
    // So it can be done in any way and easiest is to just move along a corner
    // So create an array of length m and fill with empty strings
    let grid = new Array(m).fill("")

    // Use a loop to fill each index
    // The last index will be full of dots
    // Others will have 1 dot and then n-1 hashes
    for(let i = 0; i < m; i++) {
        grid[i] = i === m - 1 ? '.'.repeat(n) : '.' + '#'.repeat(n - 1)
    }

    return grid
};
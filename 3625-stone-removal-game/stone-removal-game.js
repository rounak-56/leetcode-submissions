/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    // We define a var to keep track of how many stones can be removed currently
    let canBeRemoved = 10

    // Then we run an infinite while loop to simulate the problem
    while(true) {
        // This is alice's part
        // If no. of remaining stones >= no. of stones that can be removed, we subtract it from n and decrement canBeRemoved by 1
        if(n >= canBeRemoved) {
            n -= (canBeRemoved--)
        } else {
            // If not we return false and it means alice lost the game
            return false
        }

        // This is bob's part
        // It follows the same logic as alice's part
        if(n >= canBeRemoved) {
            n -= (canBeRemoved--)
        } else {
            // Except we return true if bob doesnt have any stones to remove, because then it means alice won the game
            return true
        }
    }
};
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let daysPrefix = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]

    const aliceArrive = ((daysPrefix[parseInt(arriveAlice.slice(0, 2)) - 2]) || 0) + parseInt(arriveAlice.slice(-2))
    const aliceLeave = ((daysPrefix[parseInt(leaveAlice.slice(0, 2)) - 2]) || 0) + parseInt(leaveAlice.slice(-2))
    const bobArrive = ((daysPrefix[parseInt(arriveBob.slice(0, 2)) - 2]) || 0) + parseInt(arriveBob.slice(-2))
    const bobLeave = ((daysPrefix[parseInt(leaveBob.slice(0, 2)) - 2]) || 0) + parseInt(leaveBob.slice(-2))

    if(aliceLeave < bobArrive || bobLeave < aliceArrive) return 0
    else return Math.min(aliceLeave, bobLeave) - (aliceArrive <= bobArrive ? bobArrive : aliceArrive) + 1
};
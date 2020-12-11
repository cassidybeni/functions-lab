/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */
function sumAll(arg) {
  let sum = 0
  for(let i = 0; i < arg.length; i++){
    sum += arg[i]
  }
  return sum
}
//sumAll([1,2,3])

/**
 * Average all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - A whole number the average of all the arguments passed in
 */
function averageAll(arg) {
  let sum = 0
  for(let i = 0; i < arg.length; i++){
    sum += arg[i]
  }
  return Math.round(sum / arg.length)
}
averageAll([1,2,3])
/**
 * Flip the sign of the number passed in.
 * E.g. if 5 is passed in, return -5
 * If -12 is passed in, return 12
 * Hint: you can do this with simple math
 *
 * @param {number} n - the number to be flipped.
 * @returns {number} - The opposite value of n
 */
function flipSign(n) {
  return n * -1
}
flipSign()

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}

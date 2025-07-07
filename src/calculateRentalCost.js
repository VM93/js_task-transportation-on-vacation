/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rent = 40;
  let amount = rent * days;

  days >= 3 && days <= 6 && (amount -= 20);
  days > 6 && (amount -= 50);

  return amount;
}

module.exports = calculateRentalCost;

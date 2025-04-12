/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let answer = [];
  if (transactions === answer) {
    return answer;
  }
  function appendValuetocategory(category) {
    answer = answer.map((item) => {
      if (item.category === category.category) {
        return { ...item, totalSpent: (item.totalSpent += category.price) };
      }
      return item;
    });
  }

  transactions.forEach((item) => {
    const isInAnswer = answer.find((a) => a.category === item.category);
    if (isInAnswer) {
      appendValuetocategory(item);
    } else {
      answer.push({ category: item.category, totalSpent: item.price });
    }
  });

  return answer;
}

module.exports = calculateTotalSpentByCategory;

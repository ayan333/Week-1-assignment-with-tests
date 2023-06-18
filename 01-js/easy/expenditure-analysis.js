/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const cat_expense_map = new Map();
  for(let i=0; i<transactions.length; i++){
    const category = transactions[i].category;
    if(cat_expense_map.has(category)){
      cat_expense_map.set(category, transactions[i].price + cat_expense_map.get(category))
    }
    else{
      cat_expense_map.set(category, transactions[i].price)
    }
  }

  const output = []
  cat_expense_map.forEach( (val, key)=> {
    const txt = {
      "category": key,
      "totalSpent": val
    }
    output.push(txt)

  })
  return output;
}

module.exports = calculateTotalSpentByCategory;

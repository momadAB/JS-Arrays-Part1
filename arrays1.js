// Task 1
let groceries = [];
for (let i = 0; i < 6; i++) {
    groceries.push(`Grocery ${i}`);
}

console.log(`Task 1: ${groceries}`);

// Task 2
console.log(`Task 2: ${groceries[1]}`);

// Task 3
console.log(`Task 3: ${groceries.length}`);

// Task 4
console.log(`Task 4: ${groceries[groceries.length - 1]}`);

// Task 5
const lastEle = groceries.pop();
console.log(`Task 5: Last element: ${lastEle}, Array after removing last element: [${groceries}]`);

// Task 6 
groceries.push('Grocery 6');
groceries.push('Grocery 7');
console.log(`Task 6: ${groceries}`);

// Task 7
const firstThreeItems = groceries.slice(0, 3);
console.log(`Task 7: ${firstThreeItems}`)

// Challenge 1
groceries.splice(2, 1);
console.log(`Challenge 1: ${groceries}`)

// Challenge 2
groceries.unshift("Grocery -1");
console.log(`Challenge 2: ${groceries}`)

// Challenge 3
groceries.splice(0, 2, "ketchup", "chili");
console.log(`Challenge 3: ${groceries}`)


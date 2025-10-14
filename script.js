const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class 'prices'
  const priceElements = document.querySelectorAll(".prices");
  
  let total = 0;

  // Sum all the prices
  priceElements.forEach((price) => {
    total += parseFloat(price.textContent) || 0;
  });

  // Create a new row for total
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Set the cell to span all columns
  newCell.colSpan = 2; 
  newCell.textContent = `Total Price: ${total}`;

  // Append cell to row
  newRow.appendChild(newCell);

  // Append row to table
  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);



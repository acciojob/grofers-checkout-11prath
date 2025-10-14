const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const priceElements = document.querySelectorAll(".prices");

  // Calculate total sum
  let total = 0;
  priceElements.forEach((price) => {
    total += parseFloat(price.textContent) || 0;
  });

  // Create new row and cell for total
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Span across full table width
  newCell.colSpan = 2;
  newCell.textContent = `Total Price: ${total}`;

  // Append cell to row, and row to table
  newRow.appendChild(newCell);
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);



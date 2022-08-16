document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmount = parseFloat(depositField.value);

  const depositTotalField = document.getElementById("deposit-total");
  const depositTotal = parseFloat(depositTotalField.innerText);

  const totalBalanceField = document.getElementById("total-balance-field");
  const totalBalance = parseFloat(totalBalanceField.innerText);

  depositTotalField.innerText = depositTotal + depositAmount;
  depositField.value = "";

  const newTotalBalance = totalBalance + depositAmount;
  totalBalanceField.innerText = newTotalBalance;
});

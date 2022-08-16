document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrawField.value);

  const withdrawTotalField = document.getElementById("withdraw-total");
  const withdrawTotal = parseFloat(withdrawTotalField.innerText);

  const totalBalanceField = document.getElementById("total-balance-field");
  const totalBalance = parseFloat(totalBalanceField.innerText);

  const newWithdrawTotal = withdrawTotal + withdrawAmount;
  withdrawTotalField.innerText = newWithdrawTotal;

  const newTotalBalance = totalBalance - withdrawAmount;
  totalBalanceField.innerText = newTotalBalance;

  withdrawField.value = "";
});

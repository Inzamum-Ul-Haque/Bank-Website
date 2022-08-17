document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getInputFieldValue("withdraw-field");

  const withdrawTotal = getElementValue("withdraw-total");
  const totalBalance = getElementValue("total-balance-field");

  const totalBalanceField = document.getElementById("total-balance-field");
  const withdrawTotalField = document.getElementById("withdraw-total");

  withdrawTotalField.innerText = withdrawTotal + withdrawAmount;
  totalBalanceField.innerText = totalBalance - withdrawAmount;
});

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInputFieldValue("deposit-field");

  const depositTotalElement = document.getElementById("deposit-total");
  const totalBalanceElement = document.getElementById("total-balance-field");

  const depositTotal = getElementValue("deposit-total");
  const totalBalance = getElementValue("total-balance-field");

  depositTotalElement.innerText = depositTotal + depositAmount;
  totalBalanceElement.innerText = totalBalance + depositAmount;
});

document.getElementById("reset-btn").addEventListener("click", function () {
  const depositTotal = document.getElementById("deposit-total");
  const withdrawTotal = document.getElementById("withdraw-total");

  depositTotal.innerText = "00";
  withdrawTotal.innerText = "00";
});

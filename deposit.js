let depositButton = document.getElementById("deposit");
let withdrawButton = document.getElementById("withdraw");

// deposit section
depositButton.addEventListener('click', function(){
    // these are mainly strings
    // to change these to numbers, we should use parseFloat()
    let depositAmount = document.getElementById("deposit-amount");
    let currentDeposit = document.getElementById("current-deposit");
    
    let depositAmountValue = depositAmount.value;
    let depositAmountValueInNumber = parseFloat(depositAmountValue);
    
    let currentDepositAmount = currentDeposit.innerText;
    let currentDepositAmountInNumber = parseFloat(currentDepositAmount);

    currentDepositAmountInNumber += depositAmountValueInNumber;

    currentDeposit.innerText = currentDepositAmountInNumber;

    // updating balance section
    var currentBalance = document.getElementById("current-balance");
    var currentBalanceAmount = currentBalance.innerText;
    
    var currentBalanceAmountInNumber = parseFloat(currentBalanceAmount);

    currentBalanceAmountInNumber += depositAmountValueInNumber;

    currentBalance.innerText = currentBalanceAmountInNumber;


    depositAmount.value = '';
    
    

});

// withdraw section
withdrawButton.addEventListener('click', function(){
    let withdrawAmount = document.getElementById("withdraw-amount");
    let withdrawAmountValue = withdrawAmount.value;
    
    let currentWithdraw = document.getElementById("current-withdraw");
    let currentWithdrawValue = currentWithdraw.innerText;

    let withdrawAmountValueInNumber = parseFloat(withdrawAmountValue);
    let currentWithdrawValueInNumber = parseFloat(currentWithdrawValue);

    currentWithdrawValueInNumber += withdrawAmountValueInNumber;

    currentWithdraw.innerText = currentWithdrawValueInNumber;

    // updating balance
    var currentBalance = document.getElementById("current-balance");
    var currentBalanceAmount = currentBalance.innerText;
    
    var currentBalanceAmountInNumber = parseFloat(currentBalanceAmount);

    currentBalanceAmountInNumber -= withdrawAmountValueInNumber;

    currentBalance.innerText = currentBalanceAmountInNumber;

    withdrawAmount.value = '';
    

});
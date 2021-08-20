// handel diposite part:

//Easy Way with Function: deposit and withdrow in on function.....
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmmountText = inputField.value;
    const ammountValue = parseFloat(inputAmmountText);

    //clear diposit input
    inputField.value = '';
    return ammountValue;
}

function updateTotalField(totalField, ammount) {
    const totalElement = document.getElementById(totalField);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    
    totalElement.innerText = previousTotal + ammount ;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function upDateBalance(amount,isadd) {
    const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isadd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
   

document.getElementById('deposit-btn').addEventListener('click',function(){

    //Easy Way with Function: Deposit
    const newDepositAmmount = getInputValue('deposit-input');
    if(newDepositAmmount >0){
        updateTotalField('diposit-total',newDepositAmmount);
        upDateBalance(newDepositAmmount,true);
    }
   

    // get the amount deposite:
    /*
     const dipositInput = document.getElementById('deposit-input');
     const newDepositAmmountText = dipositInput.value;
     const newDepositAmmount = parseFloat(newDepositAmmountText);
    */
    

    //update diposit total
    /*
    const dipositTotal = document.getElementById('diposit-total');

    const previousDipositAmmonutText = dipositTotal.innerText;
    const previousDipositAmmonut = parseFloat(previousDipositAmmonutText);

    const newDepositTotal = previousDipositAmmonut + newDepositAmmount;
    dipositTotal.innerText = newDepositTotal; */
    

    //update balance total
    /*
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceAmmountText = balanceTotal.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceAmmountText);

    const newBalanceTotal = previousBalanceAmmount + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal; */
    
    // //clear diposit input
    // dipositInput.value = '';
    });


// handel withdrow part:
document.getElementById('withdrow-btn').addEventListener('click',function(){

    //Easy Way with Function: Withdrow
    const newWithdrowAmmount = getInputValue('withdrow-input')
    const currentBalance = getCurrentBalance();
    if(newWithdrowAmmount > 0 && newWithdrowAmmount < currentBalance){
        updateTotalField('withdrow-total',newWithdrowAmmount);
        upDateBalance(newWithdrowAmmount,false);
    }
    if(newWithdrowAmmount > currentBalance){
        console.log('Sorry You Have No Suffisient Balance');
    }

    // get the amount withdrow:
    /* 
    const withdrowInput = document.getElementById('withdrow-input');
     const withdrowAmmountText = withdrowInput.value;
     const newWithdrowAmmount = parseFloat(withdrowAmmountText);
     console.log(newWithdrowAmmount); */
    

    //update withdrow total
    /*
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrowTotal = newWithdrowAmmount + previousWithdrowTotal;
    withdrowTotal.innerText = newWithdrowTotal; */
    

    //update balance total
    /*
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceAmmountText = balanceTotal.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceAmmountText);

    const newBalanceTotal = previousBalanceAmmount - newWithdrowAmmount;
    balanceTotal.innerText = newBalanceTotal; */
    

    // //clear withdrow input
    // withdrowInput.value = '';
});

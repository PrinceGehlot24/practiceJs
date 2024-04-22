class BankAccount {
    constructor(accountHolder, accountNumber, balance=0){
        this.accountHolder = accountHolder
        this.accountNumber = accountNumber
        this.balance = balance
        this.transactions = []
    }

    deposits(amount){
        if (amount > 0){
            this.balance += amount
            this.transactions.push({"amount": amount, "type": "deposit", "balance": this.balance})
            return true
        }else{
            return false
        }
    }

    withdraw(amount){
        if (amount > 0){
            this.balance -= amount
            this.transactions.push({"amount": amount, "type": "withdrawl", "balance": this.balance})
            return true
        }else{
            return false
        }
    }
}

let account1 = new BankAccount("Ashish", "200123455")
account1.deposits(10000)
account1.deposits(2000)
account1.withdraw(1500)

console.log(account1, "account1")
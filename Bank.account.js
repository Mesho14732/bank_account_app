let Bank = {
    account: [], // an array to store created accounts

    // function to create account
    createAccount: function(name, initialBalance) {
        let account = {
            name: name,
            balance: initialBalance,
            
            // A function to check account balance
            checkBalance: function() {
                console.log(`Hello ${this.name}, your account balance is ${this.balance}.`);
            },
            
            // A function to deposit money
            deposit: function(amount) {
                this.balance += amount;
                console.log(`Hello ${this.name}, you have deposited ${amount} into your account. Your new balance is ${this.balance}.`);
            },
            
            // A function to transfer money
            transfer: function(amount, recipientName) {
                // Check if sender has enough balance
                if (this.balance < amount) {
                    console.log(`Hello ${this.name}, you do not have sufficient balance to make the transfer.`);
                } else {
                    // Find the recipient in the bank's account array
                    let recipient = Bank.account.find(acc => acc.name === recipientName);
                    
                    // Check if recipient exists
                    if (recipient) {
                        // Deduct the amount from the sender's balance
                        this.balance -= amount;
                        
                        // Add the amount to the recipient's balance
                        recipient.balance += amount;
                        
                        console.log(`Hello ${this.name}, you have successfully transferred ${amount} to ${recipient.name}. Your new balance is ${this.balance}.`);
                        console.log(`Hello ${recipient.name}, you have received ${amount} from ${this.name}. Your new balance is ${recipient.balance}.`);
                    } else {
                        console.log(`Recipient ${recipientName} does not exist.`);
                    }
                }
            },

            // A function to request a loan
            requestLoan: function(amount) {
                // Loan condition: Can request a loan up to 5 times the current balance
                if (amount <= this.balance * 5) {
                    this.balance += amount;
                    console.log(`Hello ${this.name}, your loan of ${amount} has been approved. Your new balance is ${this.balance}.`);
                } else {
                    console.log(`Hello ${this.name}, your loan request for ${amount} was denied. You can only request a loan up to 5 times your current balance.`);
                }
            }
        };
        
        // Add new account to the account array
        this.account.push(account);
        // Return user for reference purposes
        return account;
    }
};
  

//let create 2 user accounts
let John = Bank.createAccount("John", 5000);
let Dorcas =Bank.createAccount("Dorcas", 1000);
let Joro =Bank.createAccount("Joro", 200);


//Test account functions
John.checkBalance();
Dorcas.checkBalance();
Joro.checkBalance()
John.deposit(3000);
John.transfer(2000, 'Dorcas')
Dorcas.checkBalance();
John.requestLoan(200)
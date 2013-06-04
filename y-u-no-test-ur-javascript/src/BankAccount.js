function BankAccount(amount) {
	this.balance = amount;
}

BankAccount.prototype.deposit = function(amount) {
	this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
	if (amount > this.balance)
		throw new Error("Insufficient Funds");

	this.balance -= amount;
};
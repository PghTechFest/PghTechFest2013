function InterestAccruer(service) {
	this.service = service;
}

InterestAccruer.prototype.accrueInterest = function(account) {
	
	var rate = this.service.getCurrentRate();
	account.deposit(rate * account.balance);
};
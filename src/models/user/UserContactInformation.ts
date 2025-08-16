export class UserContactInformation {
	// Getters
	getEmail(): string { return this.email; }
	getPhoneNumber(): string { return this.phoneNumber; }

	// Setters
	setEmail(email: string): void { this.email = email; }
	setPhoneNumber(phoneNumber: string): void { this.phoneNumber = phoneNumber; }
	email: string;
	phoneNumber: string;

	constructor(email: string, phoneNumber: string) {
		this.email = email;
		this.phoneNumber = phoneNumber;
	}

	verifyEmail(): boolean { return true; }
	verifyPhoneNumber(): boolean { return true; }
}

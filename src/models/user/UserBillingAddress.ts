export class UserBillingAddress {
	// Getters
	getAddress(): string { return this.address; }
	getPostalCode(): string { return this.postalCode; }
	getCity(): string { return this.city; }
	getCountry(): string { return this.country; }

	// Setters
	setAddress(address: string): void { this.address = address; }
	setPostalCode(postalCode: string): void { this.postalCode = postalCode; }
	setCity(city: string): void { this.city = city; }
	setCountry(country: string): void { this.country = country; }
	address: string;
	postalCode: string;
	city: string;
	country: string;

	constructor(address: string, postalCode: string, city: string, country: string) {
		this.address = address;
		this.postalCode = postalCode;
		this.city = city;
		this.country = country;
	}

	validate(): boolean { return true; }
	getNormalized(): string { return this.address; }
}

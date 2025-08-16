import { UserContactInformation } from './UserContactInformation';
import { UserBillingAddress } from './UserBillingAddress';

export abstract class User {
		private _uuid: string;
		private _name: string;
		private _surname: string;
		private _passwordHash: string;
		private _governmentID: string;
		private _dateOfBirth: Date;
		private _createdAt: Date;
		private _consentToDataProcessing: boolean;
		private _contactInfo: UserContactInformation;
		private _billingAddress: UserBillingAddress;

		constructor(
			uuid: string,
			name: string,
			surname: string,
			passwordHash: string,
			governmentID: string,
			dateOfBirth: Date,
			createdAt: Date,
			consentToDataProcessing: boolean,
			contactInfo: UserContactInformation,
			billingAddress: UserBillingAddress
		) {
			this._uuid = uuid;
			this._name = name;
			this._surname = surname;
			this._passwordHash = passwordHash;
			this._governmentID = governmentID;
			this._dateOfBirth = dateOfBirth;
			this._createdAt = createdAt;
			this._consentToDataProcessing = consentToDataProcessing;
			this._contactInfo = contactInfo;
			this._billingAddress = billingAddress;
		}

		get uuid() { return this._uuid; }
		set uuid(val: string) { this._uuid = val; }
		get name() { return this._name; }
		set name(val: string) { this._name = val; }
		get surname() { return this._surname; }
		set surname(val: string) { this._surname = val; }
		get passwordHash() { return this._passwordHash; }
		set passwordHash(val: string) { this._passwordHash = val; }
		get governmentID() { return this._governmentID; }
		set governmentID(val: string) { this._governmentID = val; }
		get dateOfBirth() { return this._dateOfBirth; }
		set dateOfBirth(val: Date) { this._dateOfBirth = val; }
		get createdAt() { return this._createdAt; }
		set createdAt(val: Date) { this._createdAt = val; }
		get consentToDataProcessing() { return this._consentToDataProcessing; }
		set consentToDataProcessing(val: boolean) { this._consentToDataProcessing = val; }
		get contactInfo() { return this._contactInfo; }
		set contactInfo(val: UserContactInformation) { this._contactInfo = val; }
		get billingAddress() { return this._billingAddress; }
		set billingAddress(val: UserBillingAddress) { this._billingAddress = val; }

	abstract verifyAge(): boolean;
	abstract generateUUID(): string;
	getFullName(): string {
		return `${this.name} ${this.surname}`;
	}
	login(): boolean {
		// Placeholder for login logic
		return true;
	}
}

import { UserContactInformation } from './UserContactInformation';
import { UserBillingAddress } from './UserBillingAddress';
import { User } from './User';
import { Role } from '../roles/Role';

export class Employee extends User {
	hireDate: Date;
	roles: Role[];

	// Getters
	getHireDate(): Date {
		return this.hireDate;
	}

	getRoles(): Role[] {
		return this.roles;
	}

	// Setters
	setHireDate(hireDate: Date): void {
		this.hireDate = hireDate;
	}

	setRoles(roles: Role[]): void {
		this.roles = roles;
	}

	addRole(role: Role): void {
		this.roles.push(role);
	}

	removeRole(role: Role): void {
		this.roles = this.roles.filter(r => r !== role);
	}

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
		billingAddress: UserBillingAddress,
		hireDate: Date,
	roles: Role[]
	) {
		super(uuid, name, surname, passwordHash, governmentID, dateOfBirth, createdAt, consentToDataProcessing, contactInfo, billingAddress);
		this.hireDate = hireDate;
		this.roles = roles;
	}

	verifyAge(): boolean {
		// Implement age verification logic
		return true;
	}
	generateUUID(): string {
		// Implement UUID generation logic
		return 'generated-uuid';
	}
	clockIn() {}
	clockOut() {}
}

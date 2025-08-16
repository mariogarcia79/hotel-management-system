import { PaymentInformation } from '../payment/PaymentInformation';
import { Booking } from '../booking/Booking';
import { Reservation } from '../booking/Reservation';
import { Nationality } from '../enum/Enumerations';
import { User } from './User';
import { UserContactInformation } from './UserContactInformation';
import { UserBillingAddress } from './UserBillingAddress';
export class Guest extends User {
	private _nationality: Nationality;
	private _reservationList: Reservation[];
	private _bookingList: Booking[];
	private _paymentInfo: PaymentInformation[];

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
		nationality: Nationality,
		reservationList: Reservation[] = [],
		bookingList: Booking[] = [],
	paymentInfo: PaymentInformation[] = []
	) {
		super(uuid, name, surname, passwordHash, governmentID, dateOfBirth, createdAt, consentToDataProcessing, contactInfo, billingAddress);
		this._nationality = nationality;
		this._reservationList = reservationList;
		this._bookingList = bookingList;
		this._paymentInfo = paymentInfo;
	}

	get nationality(): Nationality { return this._nationality; }
	set nationality(val: Nationality) { this._nationality = val; }
	get reservationList(): Reservation[] { return this._reservationList; }
	set reservationList(val: Reservation[]) { this._reservationList = val; }
	get bookingList(): Booking[] { return this._bookingList; }
	set bookingList(val: Booking[]) { this._bookingList = val; }
	get paymentInfo(): PaymentInformation[] { return this._paymentInfo; }
	set paymentInfo(val: PaymentInformation[]) { this._paymentInfo = val; }

	verifyAge(): boolean {
		// Implement age verification logic
		return true;
	}
	generateUUID(): string {
		// Implement UUID generation logic
		return 'generated-uuid';
	}
	checkIn(): void {}
	checkOut(): void {}
	getRooms(dateIn: Date, dateOut: Date): any[] { return []; }
	getDates(room: any): any[] { return []; }
	makeBooking(dateIn: Date, dateOut: Date, room: any): void {}
	makeBookingWithReservation(reservation: Reservation): void {}
	modifyBooking(booking: Booking): void {}
	makeReservation(dateIn: Date, dateOut: Date, room: any): void {}
	modifyReservation(reservation: Reservation): void {}
	cancelReservation(reservation: Reservation): void {}
	addPaymentInformation(info: PaymentInformation): void { this._paymentInfo.push(info); }
	getUpcomingBookings(): Booking[] {
		return this._bookingList.filter(b => b.dateIn > new Date());
	}
	getPastBookings(): Booking[] {
		return this._bookingList.filter(b => b.dateOut < new Date());
	}
	getActiveReservations(): Reservation[] {
		return this._reservationList.filter(r => r.status === 'Confirmed');
	}
}

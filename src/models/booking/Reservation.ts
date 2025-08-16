import { Booking } from './Booking';
import { BookingDetail } from './BookingDetail';
import { ReservationStatus } from '../enum/Enumerations';

export class Reservation extends Booking {
  // Getters
  getStatus(): ReservationStatus { return this.status; }

  // Setters
  setStatus(status: ReservationStatus): void { this.status = status; }
  status: ReservationStatus;

  constructor(
    status: ReservationStatus,
    bookingDate: Date,
    dateIn: Date,
    dateOut: Date,
    price: number,
    details: BookingDetail,
    reservations: Reservation[]
  ) {
    super(bookingDate, dateIn, dateOut, price, details, reservations);
    this.status = status;
  }

  calculatePrice(): number { return 0; }
  applyDiscount() {}
  changeDates(dateIn: Date, dateOut: Date) {}
  makeBooking() {}
  changeStatus(status: ReservationStatus) { this.status = status; }
}

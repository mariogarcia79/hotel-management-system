import { BookingDetail } from './BookingDetail';
import { Reservation } from './Reservation';

export class Booking {
  // Getters
  getBookingDate(): Date { return this.bookingDate; }
  getDateIn(): Date { return this.dateIn; }
  getDateOut(): Date { return this.dateOut; }
  getPrice(): number { return this.price; }
  getDetails(): BookingDetail { return this.details; }
  getReservations(): Reservation[] { return this.reservations; }

  // Setters
  setBookingDate(bookingDate: Date): void { this.bookingDate = bookingDate; }
  setDateIn(dateIn: Date): void { this.dateIn = dateIn; }
  setDateOut(dateOut: Date): void { this.dateOut = dateOut; }
  setPrice(price: number): void { this.price = price; }
  setDetails(details: BookingDetail): void { this.details = details; }
  setReservations(reservations: Reservation[]): void { this.reservations = reservations; }

  // Useful methods
  addReservation(reservation: Reservation): void { this.reservations.push(reservation); }
  removeReservation(reservation: Reservation): void { this.reservations = this.reservations.filter(r => r !== reservation); }
  bookingDate: Date;
  dateIn: Date;
  dateOut: Date;
  price: number;
  details: BookingDetail;
  reservations: Reservation[];

  constructor(
    bookingDate: Date,
    dateIn: Date,
    dateOut: Date,
    price: number,
    details: BookingDetail,
    reservations: Reservation[]
  ) {
    this.bookingDate = bookingDate;
    this.dateIn = dateIn;
    this.dateOut = dateOut;
    this.price = price;
    this.details = details;
    this.reservations = reservations;
  }

  calculatePrice(): number { return this.price; }
  applyDiscount() {}
  changeDates(dateIn: Date, dateOut: Date) {
    this.dateIn = dateIn;
    this.dateOut = dateOut;
  }
}

import { Booking } from '../src/models/booking/Booking';
import { BookingDetail } from '../src/models/booking/BookingDetail';
import { Reservation } from '../src/models/booking/Reservation';
import { ReservationStatus } from '../src/models/enum/Enumerations';

describe('Booking classes', () => {
  it('should create a BookingDetail and add/remove rooms', () => {
    const detail = new BookingDetail(200, []);
    expect(detail.getPrice()).toBe(200);
    const room = { name: 'Room1' } as any;
    detail.addRoom(room);
    expect(detail.getRooms().length).toBe(1);
    detail.removeRoom(room);
    expect(detail.getRooms().length).toBe(0);
    detail.setPrice(300);
    expect(detail.getPrice()).toBe(300);
  });

  it('should create a Booking and add/remove reservations', () => {
    const booking = new Booking(new Date(), new Date(), new Date(), 300, {} as any, []);
    expect(booking.getPrice()).toBe(300);
    const reservation = { status: 'Pending' } as any;
    booking.addReservation(reservation);
    expect(booking.getReservations().length).toBe(1);
    booking.removeReservation(reservation);
    expect(booking.getReservations().length).toBe(0);
    booking.setPrice(400);
    expect(booking.getPrice()).toBe(400);
  });

  it('should create a Reservation and change status', () => {
    const reservation = new Reservation(ReservationStatus.Pending, new Date(), new Date(), new Date(), 300, {} as any, []);
    reservation.setStatus('Confirmed' as any);
    expect(reservation.getStatus()).toBe('Confirmed');
    reservation.setStatus('Cancelled' as any);
    expect(reservation.getStatus()).toBe('Cancelled');
  });
});

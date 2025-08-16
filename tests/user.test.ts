import { UserContactInformation } from '../src/models/user/UserContactInformation';
import { UserBillingAddress } from '../src/models/user/UserBillingAddress';
import { Guest } from '../src/models/user/Guest';
import { Employee } from '../src/models/user/Employee';
import { User } from '../src/models/user/User';
import { Nationality } from '../src/models/enum/Enumerations';

describe('User classes', () => {
  it('should create a Guest with correct properties', () => {
    const contact = new UserContactInformation('test@example.com', '123456789');
    const billing = new UserBillingAddress('123 St', '12345', 'City', 'Country');
    const guest = new Guest('uuid', 'John', 'Doe', 'hash', 'ID', new Date(), new Date(), true, contact, billing, Nationality.US, [], [], []);
    expect(guest.name).toBe('John');
    expect(guest.contactInfo).toBe(contact);
    expect(guest.billingAddress).toBe(billing);
    expect(guest.nationality).toBe(Nationality.US);
    expect(guest.reservationList).toEqual([]);
    expect(guest.bookingList).toEqual([]);
    expect(guest.paymentInfo).toEqual([]);
  });

  it('should add and retrieve payment information for Guest', () => {
    const contact = new UserContactInformation('test@example.com', '123456789');
    const billing = new UserBillingAddress('123 St', '12345', 'City', 'Country');
    const guest = new Guest('uuid', 'John', 'Doe', 'hash', 'ID', new Date(), new Date(), true, contact, billing, Nationality.CA, [], [], []);
    const paymentInfoMock = { amount: 100, date: new Date() } as any;
    guest.addPaymentInformation(paymentInfoMock);
    expect(guest.paymentInfo.length).toBe(1);
    expect(guest.paymentInfo[0]).toBe(paymentInfoMock);
  });

  it('should get upcoming and past bookings for Guest', () => {
    const contact = new UserContactInformation('test@example.com', '123456789');
    const billing = new UserBillingAddress('123 St', '12345', 'City', 'Country');
    const now = new Date();
    const futureBooking = { dateIn: new Date(now.getTime() + 100000), dateOut: new Date(now.getTime() + 200000) } as any;
    const pastBooking = { dateIn: new Date(now.getTime() - 200000), dateOut: new Date(now.getTime() - 100000) } as any;
    const guest = new Guest('uuid', 'John', 'Doe', 'hash', 'ID', now, now, true, contact, billing, Nationality.UK, [], [futureBooking, pastBooking], []);
    expect(guest.getUpcomingBookings()).toContain(futureBooking);
    expect(guest.getPastBookings()).toContain(pastBooking);
  });

  it('should get active reservations for Guest', () => {
    const contact = new UserContactInformation('test@example.com', '123456789');
    const billing = new UserBillingAddress('123 St', '12345', 'City', 'Country');
    const confirmedReservation = { status: 'Confirmed' } as any;
    const pendingReservation = { status: 'Pending' } as any;
    const guest = new Guest('uuid', 'John', 'Doe', 'hash', 'ID', new Date(), new Date(), true, contact, billing, Nationality.DE, [confirmedReservation, pendingReservation], [], []);
    expect(guest.getActiveReservations()).toContain(confirmedReservation);
    expect(guest.getActiveReservations()).not.toContain(pendingReservation);
  });

  it('should create an Employee with correct properties', () => {
    const contact = new UserContactInformation('emp@example.com', '987654321');
    const billing = new UserBillingAddress('456 St', '54321', 'Town', 'Country');
    const employee = new Employee('uuid', 'Jane', 'Smith', 'hash', 'ID', new Date(), new Date(), true, contact, billing, new Date(), []);
    expect(employee.name).toBe('Jane');
    expect(employee.contactInfo).toBe(contact);
    expect(employee.billingAddress).toBe(billing);
  });
});

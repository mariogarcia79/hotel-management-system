import { Hotel } from '../src/models/hotel/Hotel';
import { Guest } from '../src/models/user/Guest';
import { Room } from '../src/models/hotel/Room';

describe('Hotel class', () => {
  it('should add, remove, set, and get guests', () => {
    const hotel = new Hotel([], []);
    const guest1 = { name: 'Guest1' } as Guest;
    const guest2 = { name: 'Guest2' } as Guest;
    hotel.addGuest(guest1);
    hotel.addGuest(guest2);
    expect(hotel.getGuests().length).toBe(2);
    hotel.removeGuest(guest1);
    expect(hotel.getGuests().length).toBe(1);
    hotel.setGuests([guest1, guest2]);
    expect(hotel.getGuests().length).toBe(2);
  });

  it('should add, remove, set, and get rooms', () => {
    const hotel = new Hotel([], []);
    const room1 = { name: 'Room1' } as Room;
    const room2 = { name: 'Room2' } as Room;
    hotel.addRoom(room1);
    hotel.addRoom(room2);
    expect(hotel.getRooms().length).toBe(2);
    hotel.removeRoom(room1);
    expect(hotel.getRooms().length).toBe(1);
    hotel.setRooms([room1, room2]);
    expect(hotel.getRooms().length).toBe(2);
  });
});

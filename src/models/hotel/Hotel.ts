import { Guest } from '../user/Guest';
import { Room } from './Room';

export class Hotel {
  guests: Guest[];
  rooms: Room[];

  constructor(guests: Guest[], rooms: Room[]) {
    this.guests = guests;
    this.rooms = rooms;
  }

  // Getters
  getGuests(): Guest[] { return this.guests; }
  getRooms(): Room[] { return this.rooms; }

  // Setters
  setGuests(guests: Guest[]): void { this.guests = guests; }
  setRooms(rooms: Room[]): void { this.rooms = rooms; }

  // Useful methods
  addGuest(guest: Guest): void { this.guests.push(guest); }
  removeGuest(guest: Guest): void { this.guests = this.guests.filter(g => g !== guest); }
  addRoom(room: Room): void { this.rooms.push(room); }
  removeRoom(room: Room): void { this.rooms = this.rooms.filter(r => r !== room); }
}
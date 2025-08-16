import { Room } from '../hotel/Room';

export class BookingDetail {
  // Getters
  getRooms(): Room[] { return this.rooms; }

  // Setters
  setPrice(price: number): void { this.price = price; }
  setRooms(rooms: Room[]): void { this.rooms = rooms; }

  // Useful methods
  addRoom(room: Room): void { this.rooms.push(room); }
  removeRoom(room: Room): void { this.rooms = this.rooms.filter(r => r !== room); }
  price: number;
  rooms: Room[];

  constructor(price: number, rooms: Room[]) {
    this.price = price;
    this.rooms = rooms;
  }

  getPrice(): number { return this.price; }
}

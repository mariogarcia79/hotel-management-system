import { RoomStatus } from '../enum/Enumerations';

export class Room {
  // Getters
  getName(): string { return this.name; }
  getNumberOfBeds(): number { return this.numberOfBeds; }
  hasBathroom(): boolean { return this.bathroom; }
  getPrice(): number { return this.price; }
  getStatus(): RoomStatus { return this.status; }

  // Setters
  setName(name: string): void { this.name = name; }
  setNumberOfBeds(numberOfBeds: number): void { this.numberOfBeds = numberOfBeds; }
  setBathroom(bathroom: boolean): void { this.bathroom = bathroom; }
  setPrice(price: number): void { this.price = price; }
  setStatus(status: RoomStatus): void { this.status = status; }
  name: string;
  numberOfBeds: number;
  bathroom: boolean;
  price: number;
  status: RoomStatus;

  constructor(name: string, numberOfBeds: number, bathroom: boolean, price: number, status: RoomStatus) {
    this.name = name;
    this.numberOfBeds = numberOfBeds;
    this.bathroom = bathroom;
    this.price = price;
    this.status = status;
  }
}

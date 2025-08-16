import { PaymentInformation } from './PaymentInformation';

export class VirtualCardPaymentInformation implements PaymentInformation {
  // Getters
  getAmount(): number { return this.amount; }
  getDate(): Date { return this.date; }
  getVirtualCardId(): string { return this.virtualCardId; }

  // Setters
  setAmount(amount: number): void { this.amount = amount; }
  setDate(date: Date): void { this.date = date; }
  setVirtualCardId(virtualCardId: string): void { this.virtualCardId = virtualCardId; }
  amount: number;
  date: Date;
  virtualCardId: string;

  constructor(amount: number, date: Date, virtualCardId: string) {
    this.amount = amount;
    this.date = date;
    this.virtualCardId = virtualCardId;
  }
}

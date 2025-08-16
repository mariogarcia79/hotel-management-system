import { PaymentInformation } from './PaymentInformation';

export class CashPaymentInformation implements PaymentInformation {
  // Getters
  getAmount(): number { return this.amount; }
  getDate(): Date { return this.date; }
  getReceivedBy(): string { return this.receivedBy; }

  // Setters
  setAmount(amount: number): void { this.amount = amount; }
  setDate(date: Date): void { this.date = date; }
  setReceivedBy(receivedBy: string): void { this.receivedBy = receivedBy; }
  amount: number;
  date: Date;
  receivedBy: string;

  constructor(amount: number, date: Date, receivedBy: string) {
    this.amount = amount;
    this.date = date;
    this.receivedBy = receivedBy;
  }
}

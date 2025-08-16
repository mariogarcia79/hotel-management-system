import { PaymentInformation } from './PaymentInformation';

export class CardPaymentInformation implements PaymentInformation {
  // Getters
  getAmount(): number { return this.amount; }
  getDate(): Date { return this.date; }
  getCardNumber(): string { return this.cardNumber; }
  getCardHolder(): string { return this.cardHolder; }
  getExpiry(): string { return this.expiry; }

  // Setters
  setAmount(amount: number): void { this.amount = amount; }
  setDate(date: Date): void { this.date = date; }
  setCardNumber(cardNumber: string): void { this.cardNumber = cardNumber; }
  setCardHolder(cardHolder: string): void { this.cardHolder = cardHolder; }
  setExpiry(expiry: string): void { this.expiry = expiry; }
  amount: number;
  date: Date;
  cardNumber: string;
  cardHolder: string;
  expiry: string;

  constructor(amount: number, date: Date, cardNumber: string, cardHolder: string, expiry: string) {
    this.amount = amount;
    this.date = date;
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expiry = expiry;
  }
}

import { PaymentInformation } from './PaymentInformation';
import { PaymentStatus, PaymentMethod } from '../enum/Enumerations';

export class Payment {
  paymentUUID: string;
  totalPrice: number;
  discountAmount: number;
  discountPercentage: number;
  status: PaymentStatus;
  paymentMethod: PaymentMethod;
  paymentInformation: PaymentInformation;
  currency: string;

  constructor(
    paymentUUID: string,
    totalPrice: number,
    discountAmount: number,
    discountPercentage: number,
    status: PaymentStatus,
    paymentMethod: PaymentMethod,
  paymentInformation: PaymentInformation,
    currency: string
  ) {
    this.paymentUUID = paymentUUID;
    this.totalPrice = totalPrice;
    this.discountAmount = discountAmount;
    this.discountPercentage = discountPercentage;
    this.status = status;
    this.paymentMethod = paymentMethod;
  this.paymentInformation = paymentInformation;
    this.currency = currency;
  }

  // Getters
  getPaymentUUID(): string { return this.paymentUUID; }
  getTotalPrice(): number { return this.totalPrice; }
  getDiscountAmount(): number { return this.discountAmount; }
  getDiscountPercentage(): number { return this.discountPercentage; }
  getStatus(): PaymentStatus { return this.status; }
  getPaymentMethod(): PaymentMethod { return this.paymentMethod; }
  getPaymentInformation(): PaymentInformation { return this.paymentInformation; }
  getCurrency(): string { return this.currency; }

  // Setters
  setTotalPrice(totalPrice: number): void { this.totalPrice = totalPrice; }
  setDiscountAmount(discountAmount: number): void { this.discountAmount = discountAmount; }
  setDiscountPercentage(discountPercentage: number): void { this.discountPercentage = discountPercentage; }
  setStatus(status: PaymentStatus): void { this.status = status; }
  setPaymentMethod(paymentMethod: PaymentMethod): void { this.paymentMethod = paymentMethod; }
  setPaymentInformation(paymentInformation: PaymentInformation): void { this.paymentInformation = paymentInformation; }
  setCurrency(currency: string): void { this.currency = currency; }

  // Useful methods
  generateUUID(): string { return 'generated-uuid'; }
  changeStatus(status: PaymentStatus) { this.status = status; }
  executePayment() {}
}

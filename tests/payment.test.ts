import { Payment } from '../src/models/payment/Payment';
import { CardPaymentInformation } from '../src/models/payment/CardPaymentInformation';
import { CashPaymentInformation } from '../src/models/payment/CashPaymentInformation';
import { VirtualCardPaymentInformation } from '../src/models/payment/VirtualCardPaymentInformation';

describe('Payment classes', () => {
  it('should create CardPaymentInformation', () => {
    const cardInfo = new CardPaymentInformation(100, new Date(), '1234', 'John Doe', '12/25');
    expect(cardInfo.getAmount()).toBe(100);
    expect(cardInfo.getCardHolder()).toBe('John Doe');
    cardInfo.setAmount(200);
    expect(cardInfo.getAmount()).toBe(200);
  });

  it('should create CashPaymentInformation', () => {
    const cashInfo = new CashPaymentInformation(50, new Date(), 'Jane Doe');
    expect(cashInfo.getAmount()).toBe(50);
    expect(cashInfo.getReceivedBy()).toBe('Jane Doe');
    cashInfo.setReceivedBy('John Smith');
    expect(cashInfo.getReceivedBy()).toBe('John Smith');
  });

  it('should create VirtualCardPaymentInformation', () => {
    const virtualInfo = new VirtualCardPaymentInformation(75, new Date(), 'VCID123');
    expect(virtualInfo.getAmount()).toBe(75);
    expect(virtualInfo.getVirtualCardId()).toBe('VCID123');
    virtualInfo.setVirtualCardId('VCID456');
    expect(virtualInfo.getVirtualCardId()).toBe('VCID456');
  });

  it('should create and update Payment', () => {
    const paymentInfo = new CardPaymentInformation(100, new Date(), '1234', 'John Doe', '12/25');
    const payment = new Payment('pay-uuid', 500, 50, 10, 'Pending' as any, 'Card' as any, paymentInfo, 'USD');
    expect(payment.getTotalPrice()).toBe(500);
    payment.setTotalPrice(600);
    expect(payment.getTotalPrice()).toBe(600);
    payment.setStatus('Completed' as any);
    expect(payment.getStatus()).toBe('Completed');
    expect(payment.getPaymentInformation()).toBe(paymentInfo);
  });
});

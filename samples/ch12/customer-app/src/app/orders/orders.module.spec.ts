import { OrdersModule } from './orders.module';

describe('OrdersModule', () => {
  let ordersModule: OrdersModule;

  beforeEach(() => {
    ordersModule = new OrdersModule();
  });

  it('should create an instance', () => {
    expect(ordersModule).toBeTruthy();
  });
});

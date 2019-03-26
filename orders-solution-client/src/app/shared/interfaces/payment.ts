export interface Payment {
  id?: number;
  orderId: string;
  method: string;
  state: string;
}

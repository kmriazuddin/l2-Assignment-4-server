import { Types } from 'mongoose';

export type TProducts = {
  product: Types.ObjectId;
  quantity: number;
};

export type TPaymentMethod = 'cashOnDelivery' | 'stripe';

export type TOrder = {
  name: string;
  email: string;
  phNumber: string;
  address: string;
  products: [TProducts];
  payment: TPaymentMethod;
};

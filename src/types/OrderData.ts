import { CartItem } from './CartItem';

export interface OrderData {
  name: string;
  surname: string;
  address: string;
  phone: string;
  total: number;
  items: CartItem[];
}

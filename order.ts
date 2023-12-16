export type Order = {
   customerId?: number;
   name?: string;
   orderDate?: string;
   quantity?: number;
   price?: number;
   totalPrice?: number;
   customerName?: string;
   phoneNo?: number;
   email?: string;
   message?: string;
   address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: number
   }
   
}
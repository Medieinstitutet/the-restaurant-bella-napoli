import { Customer } from "./Customer";

export class Booking {
  constructor(
    public restaurantId: string,
    public date: Date,
    public time: number,
    public numberOfGuests: number,
    public customer: Customer
  ) {}
}

import { ICustomer } from "./ICustomer";

export class Booking {
  constructor(
    public restaurantId: string,
    public date: Date,
    public time: number,
    public numberOfGuests: number,
    public customer: ICustomer
  ) {}
}

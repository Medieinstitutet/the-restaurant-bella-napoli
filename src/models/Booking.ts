import { ICustomer } from "./ICustomer";

export class Booking {
  constructor(
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customer: ICustomer
  ) {}
}

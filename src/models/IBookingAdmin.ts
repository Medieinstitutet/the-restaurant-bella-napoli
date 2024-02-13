import { IBooking } from "./IBooking";

export interface IBookingAdmin extends IBooking {
  _id: string;
  restaurantId: string;
  customerId: string;
}

export interface IAllOrderModel{
  orders:Array<OrdersModel>
}

export interface OrdersModel {
        id: string,
        userId: string,
        client: string,
        products: Array<OrderProductModel>,
        status: string,
        dateEntry: string,
        dateProcesed: string,
}

export interface OrderProductModel {
  qty: number;
  product: OrderDetailProductModel;
}

export interface OrderDetailProductModel {
  name: string;
  id: string;
  price:number;
}

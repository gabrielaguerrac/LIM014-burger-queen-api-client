export interface Orders {
    
        id: string,
        userId: string,
        client: string,
        products: [
          {
            qty: number,
            product: {
              name: string,
              id: string,
            }
          }
        ],
        status: string,
        dateEntry: string,
        dateProcesed: string,
}

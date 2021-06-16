export class Producto {

    // public name: string;
    // public price: number;

    // constructor(name, price){
    //     this.name = name;
    //     this.price = price;
    // }

    constructor(
        public name: string,
        public price: number,
        public image: string,
        public type: string
    ) {
        
    }

}
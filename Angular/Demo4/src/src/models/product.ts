/*export class Product {
         id! : number;
         name! : string ;
         image! : string;
         comment! : string;
         price! : number;
         constructor(obj: any) {
            this.id = 0;
        }
         
}
*/
export interface Product {
    Id : number;
    Name : string ;
    Image : string;
    Comment : string;
    Price : number;
    Discount:number
}

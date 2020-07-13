import { Product } from './product';

export class Command {
  constructor(
    
  ) { }

  public id: string;
  public date: string;
  public product: Product;
  public Qntity : number;
  get amountLC(): number {
    return this.product.priceUnity * this.Qntity;
  }
}
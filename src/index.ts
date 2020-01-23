import {BehaviorSubject} from 'rxjs';
export class Cart {
  
  initialItem = 0;
  $cart = new BehaviorSubject<number>(this.initialItem);

  private constructor() {}
  static getInstance() {
    if (!(window as any).cart) {
      (window as any).cart = new Cart();
    }
    return (window as any).cart;
  }

  addtoCart() {
    this.initialItem = ++this.initialItem;
    this.$cart.next(this.initialItem);
  }

  getCartDetail() {
    return this.$cart;
  }
}

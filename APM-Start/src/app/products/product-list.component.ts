import { Component, OnDestroy, OnInit } from "@angular/core";
import { Iproduct } from "./Iproduct";
import { ProductService } from "./product.sevice";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    constructor(private productService: ProductService) { }
  
    
    title: string = "Product List";
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImg = false;
    errorMessage: string = '';
    sub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }
    
    products: Iproduct[] = [];

    filteredProducts: Iproduct[] = [];

    performFilter(filterBy: string) : Iproduct[] {
      filterBy = filterBy.toLowerCase();
      return this.products.filter(p => p.productName.toLowerCase().includes(filterBy))
    }

    toggleImg(): void {
      this.showImg = !this.showImg;
    }

    ngOnInit(): void {
      this.sub = this.productService.getProducts().subscribe({
        next: p => {
          this.products = p;
          this.filteredProducts = this.products;
        },
        error: e => this.errorMessage = e
      });
      
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    onRatingClicked(message: string):void {
      this.title = 'Product List: ' + message;
    }
}


// *ngIf='products.length'
// 
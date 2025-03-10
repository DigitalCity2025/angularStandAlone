import { Component, inject } from '@angular/core';
import { ProductResult } from '../../models/product-result.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  productService = inject(ProductService)

  codeBarre: string|null = null;
  result: ProductResult|null = null;

  search() {
    if(!this.codeBarre) {
      return;
    }
    this.productService.search(this.codeBarre)
      .subscribe({ 
        next: data => this.result = data,
        error: () => this.result = <ProductResult>{ status: 'error' }
      });
  }
}

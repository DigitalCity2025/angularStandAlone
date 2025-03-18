import { Component, inject } from '@angular/core';
import { ProductResult } from '../../models/product-result.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule, ZXingScannerModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  productService = inject(ProductService)

  codeBarre: string|null = null;
  result: ProductResult|null = null;

  BarcodeFormat = BarcodeFormat;
  MediaDeviceInfo = MediaDeviceInfo

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

  onScan(result: string) {
    this.codeBarre = result;
    this.search();
  }
}

import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { Observable } from 'rxjs';
import { Product } from './../../product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  product: Product
  constructor(private productService:ProductService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    });
  }

deleteProduct(): void{

this.productService.delete(this.product.id).subscribe(()=>{
  this.productService.showMessage("Produto excluído com sucesso")
  this.router.navigate(['/products'])


})

}

cancelar(): void{
  this.router.navigate(['/products'])


}

}

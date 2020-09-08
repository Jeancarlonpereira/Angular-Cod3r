import { ProductsDeleteComponent } from './components/product/product-delete/products-delete.component';
import { ProductsUpdateComponent } from './components/product/product-update/products-update.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
},
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: 'products/create',
    component : ProductCreateComponent
  },
  {
    path: 'products/update/:id',
    component : ProductsUpdateComponent
  },
  {
    path: 'products/delete/:id',
    component : ProductsDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

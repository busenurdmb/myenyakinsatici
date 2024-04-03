import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/category/:categoryID', component: ProductComponent },
  {
    path: 'products/list',
    component: ProductListComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'products/delete/:productId',
    component: ProductDeleteComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'products/add',
    component: ProductAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'products/update/:productId',
    component: ProductUpdateComponent,
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

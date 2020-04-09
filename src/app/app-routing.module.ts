import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

import { OrderComponent } from './order/order.component';



import { from } from 'rxjs';

const routes: Routes = [

  { path: 'categories', component: CategoriesComponent },
  { path: 'categoryList/:id', component: CategoryListComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

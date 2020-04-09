import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoriesService } from './categories.service';
import { from } from 'rxjs';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';

import { ClickMeComponent } from './click-me.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot([

    //   { path: 'products', component: CategoriesComponent },
    //   {path: 'products/:productId', component : ProductDetailsComponent},
    // ])
  ],
  declarations: [

    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    CategoriesComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    OrderComponent,
    ClickMeComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



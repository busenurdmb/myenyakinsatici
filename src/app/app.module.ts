// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // HttpClientModule ekleyin
// import { provideHttpClient } from '@angular/localize';  // Bu satırı kaldırın

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule], // HttpClientModule ekleyin
  providers: [
    // provideHttpClient({ useFetch: true }).withFetch(),  // Bu satırı kaldırın
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

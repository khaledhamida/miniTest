import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { displayProductComponent } from './components/display-product/display-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CommandsComponent } from './components/commands/commands.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DisplayCommandComponent } from './display-commande/display-command.component';
import { EditCommandComponent } from './edit-command/edit-command.component';
import { AddCommandComponent } from './add-command/add-command.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    displayProductComponent,
    EditProductComponent,
    AddProductComponent,
    CommandsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DisplayCommandComponent,
    EditCommandComponent,
    AddCommandComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

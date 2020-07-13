import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { displayProductComponent } from './components/display-product/display-product.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomeComponent } from './components/home/home.component';
import { CommandsComponent } from './components/commands/commands.component';
import { DisplayCommandComponent } from './display-commande/display-command.component';
import { EditCommandComponent } from './edit-command/edit-command.component';
import { AddCommandComponent } from './add-command/add-command.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'displayProduct/:id', component: displayProductComponent },
  { path: 'editProduct/:id', component: EditProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'displayCommand/:id', component: DisplayCommandComponent },
  { path: 'editCommand/:id', component: EditCommandComponent },
  { path: 'addCommand', component: AddCommandComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [routing, RouterModule.forRoot(routes,{
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule],

})


export class AppRoutingModule { }

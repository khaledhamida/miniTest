import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { Command } from '../models/command';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-edit-command',
  templateUrl: './edit-command.component.html',
  styleUrls: ['./edit-command.component.css']
})
export class EditCommandComponent implements OnInit {

  id: string;
  command: Command;
  commandeForm: FormGroup;
  allProduct:Product[];
  constructor(private fb:FormBuilder,
    private activateRoute: ActivatedRoute,
    private commandService: CommandService,
    private productService: ProductService,


    private router: Router) { }
  
  ngOnInit(): void {
    // get command by id 
    this.commandeForm = this.fb.group({
      Date: this.command.date,
      Quantity: this.command.Qntity,
      Product:this.command.product,

    })
    this.productService.findAll().subscribe(data=>{
      this.allProduct= data;
    })
  }
  // edit commande
  edit(p: any) {
    console.log(p);
    this.command= new Command();
    this.command.date= p.Date;
    this.command.Qntity= p.Quantity;
    this.command.product= p.Product
    this.commandService.editCommand(this.command);
    console.log(this.command.amountLC);
    this.router.navigate(['/']);
}
}

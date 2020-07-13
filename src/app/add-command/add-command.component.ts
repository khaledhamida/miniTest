import { Component, OnInit, Input } from '@angular/core';
import { Command } from '../models/command';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommandService } from '../services/command.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/products.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {
  
  amntLC: any;
  command: Command;
  commandeForm: FormGroup;
  allProduct:Product[];
  constructor(private fb: FormBuilder,
    private commandService: CommandService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.commandeForm = this.fb.group({
      Date: [''],
      Quantity: [''],
      Product:[''],

    })
    this.productService.findAll().subscribe(data=>{
      this.allProduct= data;
    })
  }
  // add commande
  addCommand(p: any) {
    console.log(p);
    this.command= new Command();
    this.command.date= p.Date;
    this.command.Qntity= p.Quantity;
    this.command.product= p.Product
    this.commandService.add(this.command);
    console.log(this.command.amountLC);
    this.router.navigate(['/']);
    
    /*this.amntLC += document.getElementById("amountLC");
    this.amntLC = this.prU * this.qtity;
    console.log("amount", this.amntLC);
    console.log("this is my form", this.command);
    this.commandService.add(this.command).subscribe(
      data => {
        console.log("command added successfully");
        console.log("new command", this.command);

        this.router.navigate(['/']);
      }
    )*/
  }


}

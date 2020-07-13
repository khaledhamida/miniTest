import { Component, OnInit } from '@angular/core';
import { Command } from '../models/command';
import { ActivatedRoute } from '@angular/router';
import { CommandService } from '../services/command.service';

@Component({
  selector: 'app-display-command',
  templateUrl: './display-command.component.html',
  styleUrls: ['./display-command.component.css']
})
export class DisplayCommandComponent implements OnInit {

  id: string;
  command: Command;
  constructor(private activateRoute: ActivatedRoute,
    private commandService: CommandService) { }

  ngOnInit(): void {
    // display command by id
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.commandService.getCommandById(this.id).subscribe(
      data => {
        console.log("Data", data);
        this.command = data;
      }
    )
  }

}

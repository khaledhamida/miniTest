import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from 'src/app/models/command';
import { CommandService } from 'src/app/services/command.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  @Input() command: Command;
  @Output() newCommand: EventEmitter<Command[]> = new EventEmitter();
  commands: Command[];
  constructor(
    private commandService: CommandService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCommands();
  }
  // get all commands
  getCommands() {
    this.commandService.findAll().subscribe((data: Command[]) => {
      console.log(data)
      this.commands = data
      
    })
  }
 
  // delete command
  deleteCommand(id) {
    this.commandService.delete(id).subscribe(() => {
      this.commands = this.commands.filter(command => command.id != id);
      this.commandService.findAll().subscribe(
        data => {
          console.log("this is my Data", data);
          this.newCommand.emit(this.commands);
        }
      )
    })
  }
  // display command
  displayCommand(id: string) {
    console.log(id);
    this.router.navigate([`/displayCommand/${id}`]);
  }
  // edit commande
  editCommand(id: string) {
    console.log(id);
    this.router.navigate([`/editCommand/${id}`]);
  }
  // add commande
  addCommand() {
    this.router.navigate([`addCommand/`]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Command } from '../models/command';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public Url = "http://localhost:3000/commandes";
  constructor(private http: HttpClient) { }
  // get all commands
  findAll() {
    return this.http.get<Command[]>(this.Url);
  }
  // delete command
  delete(id) {
    return this.http.delete(`${this.Url}/${id}`);
  }
  // get command by id
  getCommandById(id: string): Observable<Command> {
    return this.http.get<Command>(`${this.Url}/${id}`);
  }
  // edit commande
  editCommand(command: Command): Observable<Command> {
    const url = `${this.Url}/${command.id}`;
    return this.http.put<Command>(url, command);
  }
  // Add commande
  add(command: Command) {
    console.log(command);
      
    return this.http.post<Command>(this.Url, command);
  }
}

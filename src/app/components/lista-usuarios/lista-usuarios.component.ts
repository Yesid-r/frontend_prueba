import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  users: any[] = [];
  error: string = '';

  constructor(private httpClient: HttpClient) { }

  @Output() addUserSelected = new EventEmitter<User>()
  selectedUser(user: User){
    this.addUserSelected.emit(user)
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      this.httpClient.get<any[]>('http://localhost:8081/api/v1/users')
      .subscribe(response => this.users = response); 
    } else {
      console.error('No token found in local storage.');
    }
  }
  delete(id:number){
    const confirmResult = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if(confirmResult){
      this.httpClient.delete<any>(`http://localhost:8081/api/v1/users/${id}`).subscribe((response) => {
        
          alert('usuario eliminado correctamente')
        
      })
    }else{
      console.log("Cancelado")
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    phone:'',
    role:''
  }
  loading: boolean = false
  
  constructor(private httpClient:HttpClient) { }

  getUser(user: User){
    this.user = user
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loading = true
    const token = localStorage.getItem('token');
    console.log(token)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    if (this.user.id) {
      
      this.httpClient.put<any>(`http://localhost:8081/api/v1/users/${this.user.id}`, this.user, { headers })
        .subscribe(
          (response) => {
            console.log('Usuario actualizado exitosamente:', response);
            alert('Usuario actualizado correctamente');
            this.loading = false;
          },
          (error) => {
            console.error('Error al actualizar usuario:', error);
            alert('Algo estuvo mal al actualizar el usuario');
            this.loading = false;
          }
        );
    } else {
      
      this.httpClient.post<any>('http://localhost:8081/api/v1/auth/register', this.user, { headers })
        .subscribe(
          (response) => {
            console.log('Usuario registrado exitosamente:', response);
            alert('Usuario guardado correctamente');
            this.loading = false;
          },
          (error) => {
            console.error('Error al registrar usuario:', error);
            alert('Algo estuvo mal al registrar el usuario');
            this.loading = false;
          }
        );
    }
  }
}

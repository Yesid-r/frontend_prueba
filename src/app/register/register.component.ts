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

  ngOnInit(): void {
  }
  onSubmit(){
    this.loading = true
    const token = localStorage.getItem('token');
    console.log(token)
    if(token){
      
      this.httpClient.post<any>('http://localhost:8081/api/v1/auth/register', this.user)
      .subscribe(
        (response) => {
          console.log('Usuario registrado exitosamente:', response);
          alert('usuario guardado correctamente')
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
          alert('algo estuvo mal')
        })
    }
    
  }

}

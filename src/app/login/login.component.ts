import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string = '';
  password: string = '';

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form submitted!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.httpClient.post<any>('http://localhost:8081/api/v1/auth/authenticate', { email: this.username, password: this.password })
      .subscribe(
        (response) => {
          console.log('Authentication successful!', response);
          localStorage.setItem('token', response.token);

          localStorage.setItem('user', JSON.stringify(response.user));
          
          
            
            this.router.navigate(['/home']);
          
        },
        (error) => {
          console.error('Error:', error);
          alert('algo estuvo mal')
        }
      );
  }
}

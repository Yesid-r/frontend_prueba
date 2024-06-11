import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {

  token: string = '';
  user: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') || '';
    console.log(this.token);
    
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.user = JSON.parse(userJson);
    }else {
      this.user = null
    }
    console.log(this.user);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.token = '';
    this.user = null;
    this.router.navigate(['/login']);
  }
}

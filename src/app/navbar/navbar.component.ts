import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {

  token: string = ''
  constructor() { }

  ngOnInit(): void {
    const tokenNav = localStorage.getItem('token')
    
  }

}

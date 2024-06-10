import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-registercredit',
  templateUrl: './registercredit.component.html',
  styleUrls: ['./registercredit.component.css']
})
export class RegistercreditComponent implements OnInit {

  idDeudor: number = 0;
  idCobrador: number = 0;
  saldo: number = 0;
  deudores: User[] = [];
  cobradores: User[] = [];

  private readonly AUTH_HEADER = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYWlybzNyaW5jb25AZ21haWwuY29tIiwiaWF0IjoxNzE4MDUwMjQ3LCJleHAiOjE3MTgxMzY2NDd9.VcY3l9dk_ggmpsvAIh7bVRHs3HJOVtoZR8dB1freuPM'
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadUsersByRole('COBRADOR', 'cobradores');
    this.loadUsersByRole('DEUDOR', 'deudores');
  }

  loadUsersByRole(role: string, targetArray: 'deudores' | 'cobradores') {
    this.httpClient.get<User[]>(`http://localhost:8081/api/v1/users/find-usersrole/${role}`, { headers: this.AUTH_HEADER })
      .pipe(
        catchError(error => {
          console.error(`Error fetching ${role}s:`, error);
          return of([]);
        })
      )
      .subscribe((response) => {
        this[targetArray] = response;
      });
  }

  onSubmit() {
    const payload = {
      idDeudor: Number(this.idDeudor),
      idCobrador: Number(this.idCobrador),
      saldo: this.saldo
    };
    console.log(payload)
    this.httpClient.post<any>("http://localhost:8081/api/v1/credit", payload, { headers: this.AUTH_HEADER })
      .subscribe((response) => {
        if(response !== null) {
          console.log('Credit created:', response);
          alert('Credito creado correctamente')
        }else{
          alert('algo estuvo mal')
          console.log('algo estuvo mal')
        }
      });
  }
}
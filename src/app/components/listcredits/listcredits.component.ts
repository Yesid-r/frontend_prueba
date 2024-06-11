import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcredits',
  templateUrl: './listcredits.component.html',
  styleUrls: ['./listcredits.component.css']
})
export class ListcreditsComponent implements OnInit {

  creditos: any[] = [];
  user: any = {};
  token: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.user = JSON.parse(userJson);
    } else {
      this.user = null;
    }
    this.token = localStorage.getItem('token') || '';
    console.log(this.user);

    if (this.user) {
      this.loadCredits();
    }
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }

  loadCredits() {
    let url = '';

    switch (this.user.role) {
      case 'ADMIN':
        url = 'http://localhost:8081/api/v1/credit';
        break;
      case 'DEUDOR':
        url = `http://localhost:8081/api/v1/credit/credits-deudor/${this.user.id}`;
        break;
      case 'COBRADOR':
        url = `http://localhost:8081/api/v1/credit/credits-cobrador/${this.user.id}`;
        break;
      default:
        console.error('Role no reconocido:', this.user.role);
        return;
    }

    this.httpClient.get<any>(url, { headers: this.getAuthHeaders() }).subscribe(
      (response) => {
        this.creditos = response;
      },
      (error) => {
        console.error('Error fetching credits:', error);
      }
    );
  }

  delete(id: number) {
    const confirmResult = window.confirm('¿Estás seguro de que deseas eliminar este crédito?');
    if (confirmResult) {
      this.httpClient.delete<any>(`http://localhost:8081/api/v1/credit/${id}`).subscribe(
        (response) => {
          alert('Crédito eliminado correctamente');
          this.loadCredits();
        },
        (error) => {
          console.error('Error deleting credit:', error);
        }
      );
    } else {
      console.log('Cancelado');
    }
  }
}

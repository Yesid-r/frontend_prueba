import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcredits',
  templateUrl: './listcredits.component.html',
  styleUrls: ['./listcredits.component.css']
})
export class ListcreditsComponent implements OnInit {

  creditos: any[] = []

  constructor(private httpClient: HttpClient) { }


  loadCredits(){
    this.httpClient.get<any>('http://localhost:8081/api/v1/credit').subscribe((response) => {
      this.creditos = response
    })
  }
  ngOnInit(): void {
    this.loadCredits()
  }

}

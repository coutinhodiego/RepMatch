import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajuda-rep',
  templateUrl: './ajuda-rep.component.html',
  styleUrls: ['./ajuda-rep.component.scss']
})
export class AjudaRepComponent implements OnInit {

  lista;
  modelo = {};

  constructor(private http : HttpClient) {
    this.listaInicial();
  }

  ngOnInit() {
  }

  listaInicial(){
    this.http
    .get('http://localhost:3000/ajuda')
    .subscribe( res => {
      this.lista = res;
      console.log(this.lista)
    })
  }

  enviar(){
    this.http
    .post('http://localhost:3000/ajuda', this.modelo)
    .subscribe(res => {
      this.listaInicial();
    })
  }

}

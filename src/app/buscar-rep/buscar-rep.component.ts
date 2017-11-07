import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-rep',
  templateUrl: './buscar-rep.component.html',
  styleUrls: ['./buscar-rep.component.scss']
})
export class BuscarRepComponent implements OnInit {

  lista;

  constructor(private http : HttpClient) {
    this.listaRepublicas();
  }

  ngOnInit() {
  }

  listaRepublicas(){
    this.http
    .get('http://localhost:3000/republicas')
    .subscribe( res => {
      this.lista = res;
      console.log(this.lista)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anunciar-rep',
  templateUrl: './anunciar-rep.component.html',
  styleUrls: ['./anunciar-rep.component.scss']
})
export class AnunciarRepComponent implements OnInit {

  modelo = {};

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  salvar(){
    console.log(this.modelo)
    this.http
    .post('http://localhost:3000/anunciarep', this.modelo)
    .subscribe(res => {
      console.log('Ok!')
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matches-rep',
  templateUrl: './matches-rep.component.html',
  styleUrls: ['./matches-rep.component.scss']
})
export class MatchesRepComponent implements OnInit {

  lista;
  modelo = {
    bairro : ''
  }

  constructor(private http : HttpClient) {



  }

  ngOnInit() {
  }

  buscar(){
    console.log(this.modelo)
    this.http
    .post('http://localhost:3000/match/republicas', this.modelo)
    .subscribe( res => {
      this.lista = res;
    })
  }

}

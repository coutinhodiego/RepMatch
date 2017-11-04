import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BuscarRepComponent } from './buscar-rep/buscar-rep.component';
import { EntrarRepComponent } from './entrar-rep/entrar-rep.component';
import { MatchesRepComponent } from './matches-rep/matches-rep.component';
import { AnunciarRepComponent } from './anunciar-rep/anunciar-rep.component';
import { AjudaRepComponent } from './ajuda-rep/ajuda-rep.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BuscarRepComponent,
    EntrarRepComponent,
    MatchesRepComponent,
    AnunciarRepComponent,
    AjudaRepComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

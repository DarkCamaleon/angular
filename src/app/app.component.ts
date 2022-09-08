import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // <h1>hola mundo</h1>
  // ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'contador app';
  numero: number = 10;
  base : number = 5;

  // sumar(){
  //   this.numero += 1;
  // }

  // restar(){
  //   this.numero -= 1;
  // }
  acumular( valor:number ){
    this.numero +=valor;
  }
}
 
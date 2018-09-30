import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora de Propinas';
  total:number = 0;
  porcentaje:number = 0.1;
  propina:number;
}

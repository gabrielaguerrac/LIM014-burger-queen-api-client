import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'buger-queen';
  public mostrarTexto: boolean = true;

  ocultarTexto(value: boolean){
    this.mostrarTexto = value
}
}



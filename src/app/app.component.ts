import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />'
  // templateUrl: './app.component.html' Otra opción si hay mas logica en el componente
})
export class AppComponent {
  title = 'store';
}

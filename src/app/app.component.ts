import { Component } from '@angular/core';
import { MenuComponent } from "./core/component/menu/menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [MenuComponent, RouterOutlet]
})
export class AppComponent {
  title = 'holy-front';
}

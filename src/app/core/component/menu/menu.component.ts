import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { AppRoutingModule } from '../../../app-routing.module';
//import { AppModule } from '../../../app.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule, RouterLink, MatToolbarModule],
})
export class MenuComponent {

}

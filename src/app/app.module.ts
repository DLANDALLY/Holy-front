import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { GalerieComponent } from "./pages/galerie/galerie.component";
import { MenuComponent } from "./core/component/menu/menu.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { LoginComponent } from "./pages/login/login.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { AppRoutingModule } from "./app-routing.module";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule, 
    BrowserAnimationsModule,
    AppComponent,
    MenuComponent,
    GalerieComponent,
    AboutMeComponent,
    ContactComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent,
    MatIconModule 
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
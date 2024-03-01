import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: GalerieComponent },
    { path: 'apropos', component: AboutMeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: NotFoundComponent },
    { path: '', redirectTo: '/galerie', pathMatch: 'full' },
];

import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import AboutComponent from './components/about/about.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import  HomeComponent  from './components/home/home.component';
import  UserComponent  from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FootbarComponent, AboutComponent,HomeComponent, UserComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}

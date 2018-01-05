import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
  }

  navigateToHome(): void {
    this.router.navigate(['']);
  }
  navigateToWeather(): void {
    this.router.navigate(['weather']);
  }
}

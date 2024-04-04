import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public currentUrl!: string;
  constructor(private router: Router) {
    // Listen to routing events
    this.router.events.subscribe((event) => {
      // Check for the specific event type if needed, for example NavigationEnd
      if (event instanceof NavigationEnd) {
        // console.log(this.router.url); // Current path excluding query parameters
        this.currentUrl = this.router.url;
      }
    });
  }
}

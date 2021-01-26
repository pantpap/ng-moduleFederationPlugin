import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes: { routerLink: string; displayName: string; icon: string }[] = [];
  activeRoute: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.routes = [
      {
        routerLink: 'lead-management',
        displayName: 'Lead Management',
        icon: 'iconsminds-dashboard',
      },
    ];
    this.setActiveRoute(this.routes[0].displayName);
  }

  setActiveRoute(displayName: string): void {
    this.activeRoute = displayName;
  }
}

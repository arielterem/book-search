import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    CommonModule,
    RouterModule,
    MatTooltipModule,
    MatIconModule
  ],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent implements OnInit {

  // Stores the current active route
  currentRoute = '';

  // Navigation links displayed in the header
  navLinks = [
    { icon: 'search', route: '/search', display: 'search' },
    { icon: 'favorite', route: '/wishlist', display: 'wishlist' }
  ];

  constructor(
    public sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Set the current route initially
    this.currentRoute = this.router.url.startsWith('/') ? this.router.url : '/' + this.router.url;

    // Subscribe to navigation events to update currentRoute after each navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const navEnd = event as NavigationEnd;
        this.currentRoute = navEnd.urlAfterRedirects;
      });
  }
}

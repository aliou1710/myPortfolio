import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { map, shareReplay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  isDarkTheme = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor() {
    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
      this.applyTheme();
    } else {
      // Détecter la préférence système
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.isDarkTheme = prefersDark;
      this.applyTheme();
    }
  }

  ngOnInit() {
    // Réinitialiser le scroll à chaque changement de route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Utiliser requestAnimationFrame pour s'assurer que le DOM est mis à jour
        requestAnimationFrame(() => {
          const mainContent = document.querySelector('mat-sidenav-content');
          if (mainContent) {
            mainContent.scrollTop = 0;
          }
          window.scrollTo(0, 0);
        });
      });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    // Sauvegarder la préférence
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}

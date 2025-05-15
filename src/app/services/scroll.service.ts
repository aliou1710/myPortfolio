import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // Écouter les événements de fin de navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Réinitialiser la position de défilement en haut de la page
        this.scrollToTop();
      });
  }

  scrollToTop(): void {
    // Utiliser setTimeout pour s'assurer que le DOM est mis à jour
    setTimeout(() => {
      window.scrollTo(0, 0);
      // Alternative avec ViewportScroller
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  scrollToElement(elementId: string): void {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }
}

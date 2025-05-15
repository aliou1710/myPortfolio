import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./components/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
  },
  {
    path: 'tools',
    loadComponent: () =>
      import('./components/tools/tools.component').then(
        (m) => m.ToolsComponent
      ),
  },
  {
    path: 'mockups',
    loadComponent: () =>
      import('./components/mockups/mockups.component').then(
        (m) => m.MockupsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  { path: '**', redirectTo: 'home' },
];

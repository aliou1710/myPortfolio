import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'Mobile' | 'Game';
  highlights: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedTechnology: string | null = null;
  selectedCategory: string | null = null;

  projects: Project[] = [
    {
      id: 12,
      title: 'Active Directory & GPO Management',
      description:
        "Mise en place et administration complète d'un environnement Active Directory, incluant la gestion avancée des stratégies de groupe (GPO), la sécurisation de l'infrastructure, et l'automatisation des tâches administratives.",
      technologies: [
        'Windows Server',
        'Active Directory',
        'PowerShell',
        'Group Policy',
        'DHCP',
        'DNS',
      ],
      category: 'Backend',
      highlights: [
        'Configuration des stratégies de groupe (GPO)',
        'Gestion des utilisateurs et des groupes de sécurité',
        'Configuration DHCP et DNS',
        "Scripts PowerShell d'automatisation",
        'Mise en place de contrôleurs de domaine',
        "Gestion des droits d'accès et permissions",
        'Configuration des stratégies de mot de passe',
        'Mise en place de sites et services AD',
      ],
    },
    {
      id: 1,
      title: 'Munin',
      description:
        'Une application mobile conçue pour les techniciens terrain, permettant de remplir des fiches de tests lors des interventions de maintenance, montage, intégration ou programmation. Les formulaires sont structurés, tracés et stockés automatiquement dans SharePoint, assurant un suivi centralisé et une meilleure gestion des opérations.',
      technologies: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'SBOM',
        'OpenShift',
        'GitLab',
        'Git',
        'SharePoint',
        'Mobile Development',
      ],
      category: 'Mobile',
      highlights: [
        'Formulaires de tests structurés',
        'Intégration SharePoint',
        'Suivi des interventions terrain',
        'Gestion des opérations de maintenance',
        'Traçabilité automatique',
        'Mode hors-ligne disponible',
      ],
    },
    {
      id: 2,
      title: 'Signalling',
      description:
        'A sophisticated railway signalling platform built with a micro frontend architecture, integrating multiple microservices that communicate with each other. It encompasses various functional modules, including "Munin Management", each independently developed and deployed.',
      technologies: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'SBOM',
        'OpenShift',
        'GitLab',
        'Git',
        'Micro Frontend',
        'Microservices',
      ],
      category: 'Full Stack',
      highlights: [
        'Micro frontend architecture',
        'Independent microservices',
        'Module-based development',
        'Munin Management integration',
        'Enterprise security integration',
        'Automated deployment pipeline',
      ],
    },
    {
      id: 3,
      title: 'Unity VR 3D',
      description:
        'An immersive virtual reality experience developed with Unity.',
      technologies: ['Unity', 'C#', 'VR SDK', 'Blender'],
      category: 'Game',
      highlights: [
        'VR environment creation',
        'Interactive 3D elements',
        'Physics-based interactions',
        'Optimized performance',
      ],
    },
    {
      id: 4,
      title: 'Recipe App using Docker',
      description:
        'A containerized recipe management application with Windows Forms frontend and Go backend.',
      technologies: ['Docker', 'Go', 'Windows Forms', 'C#', 'MySql'],
      category: 'Full Stack',
      highlights: [
        'Containerized backend services',
        'Native Windows desktop interface',
        'Recipe management system',
        'Cross-platform compatibility',
      ],
    },
    {
      id: 5,
      title: 'Crossfit App using Spring Boot',
      description:
        'A fitness tracking application for CrossFit workouts and progress monitoring.',
      technologies: ['Spring Boot', 'html/css', 'PostgreSQL'],
      category: 'Full Stack',
      highlights: [
        'Workout tracking',
        'Progress visualization',
        'User profile management',
        'Performance analytics',
      ],
    },
    {
      id: 6,
      title: 'Treasure Hunt with UWB Tags',
      description:
        'An interactive treasure hunt game using Ultra-Wideband technology for precise indoor positioning.',
      technologies: ['Java', 'Arduino', 'UWB Hardware', 'Android'],
      category: 'Mobile',
      highlights: [
        'Real-time location tracking',
        'Indoor positioning system',
        'Interactive game mechanics',
        'Mobile app integration',
      ],
    },
    {
      id: 7,
      title: 'App Control Technique in Java',
      description:
        'A Java-based desktop application for technical control and system management with Swing interface.',
      technologies: ['Java', 'Swing', 'MySQL'],
      category: 'Backend',
      highlights: [
        'Modern desktop interface',
        'Real-time control system',
        'Data persistence with MySQL',
        'Interactive monitoring dashboard',
      ],
    },
    {
      id: 8,
      title: 'Grade Management in Java',
      description:
        'A comprehensive grade management system with Swing interface for educational institutions.',
      technologies: ['Java', 'Swing', 'MySQL'],
      category: 'Backend',
      highlights: [
        'Intuitive grade tracking interface',
        'Student database management',
        'Custom report generation',
        'Performance analytics dashboard',
      ],
    },
    {
      id: 9,
      title: 'Unity AR 3D',
      description:
        'An augmented reality application developed with Unity for interactive 3D experiences.',
      technologies: ['Unity', 'C#', 'AR Foundation', 'Vuforia'],
      category: 'Game',
      highlights: [
        'AR environment integration',
        '3D object manipulation',
        'Real-world tracking',
        'Interactive AR elements',
      ],
    },
    {
      id: 10,
      title: 'IVIBES - Event Discovery Platform',
      description:
        'A comprehensive mobile application for discovering, exploring, and booking local events. Users can browse events in their city, purchase tickets, and manage their event calendar.',
      technologies: [
        'Android Studio',
        'Java',
        'PostgreSQL',
        'Google Maps API',
        'PayPal',
      ],
      category: 'Mobile',
      highlights: [
        'Interactive event discovery feed',
        'Real-time event search by location',
        'Secure ticket booking system with PayPal integration',
        'Event recommendations',
        'User profile and preferences',
        'Event organizer dashboard',
      ],
    },
    {
      id: 11,
      title: 'Diabalik - Strategic Board Game with AI',
      description:
        'An implementation of the abstract board game Diabalik featuring an advanced AI opponent powered by deep learning techniques. The game includes sophisticated search algorithms (DFS, BFS) for optimal move finding and a clean Windows Forms interface.',
      technologies: [
        'C#',
        'Windows Forms',
        'Deep Learning',
        'DFS',
        'BFS',
        'AI',
      ],
      category: 'Game',
      highlights: [
        'Advanced AI opponent using Deep Learning',
        'Multiple search algorithms (DFS, BFS)',
        'Intuitive Windows Forms interface',
        'Smart move validation system',
        'AI performance optimization',
        'Interactive tutorial system',
      ],
    },
  ];

  getAllTechnologies(): string[] {
    const technologies = new Set<string>();
    this.projects.forEach((project) => {
      project.technologies.forEach((tech) => technologies.add(tech));
    });
    return Array.from(technologies).sort();
  }

  getCategories(): string[] {
    return [...new Set(this.projects.map((project) => project.category))];
  }

  filterProjects() {
    return this.projects.filter((project) => {
      const techMatch =
        !this.selectedTechnology ||
        project.technologies.includes(this.selectedTechnology);
      const categoryMatch =
        !this.selectedCategory || project.category === this.selectedCategory;
      return techMatch && categoryMatch;
    });
  }

  selectTechnology(tech: string | null) {
    this.selectedTechnology = this.selectedTechnology === tech ? null : tech;
  }

  selectCategory(category: string | null) {
    this.selectedCategory =
      this.selectedCategory === category ? null : category;
  }
}

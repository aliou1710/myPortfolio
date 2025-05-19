import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { AnimationService } from '../../services/animation.service';
import { CacheService } from '../../services/cache.service';
import { ScrollService } from '../../services/scroll.service';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  pageAnimation,
  listAnimation,
  cardAnimation,
} from './animation.component';
interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'professional' | 'education' | 'certification';
  icon: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    cardAnimation,
    listAnimation,
    pageAnimation,
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(
    public animationService: AnimationService,
    private cacheService: CacheService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    // Réinitialiser la position de défilement
    this.scrollService.scrollToTop();

    // Tentative de récupération depuis le cache
    const cachedExperiences = this.cacheService.get('experiences');
    if (cachedExperiences) {
      this.experiences = cachedExperiences;
    } else {
      // Si pas en cache, initialiser et mettre en cache
      this.initializeExperiences();
      this.cacheService.set('experiences', this.experiences);
    }
  }

  private initializeExperiences() {
    this.experiences = [
      {
        id: 1,
        role: 'Functional Analyst',
        company: 'Infrabel',
        period: '2022 - Present',
        location: 'Belgium',
        description:
          'Functional analysis and project management in the railway sector, specialized in signaling systems.',
        achievements: [
          'Analysis and documentation of client requirements',
          'Writing detailed functional specifications',
          'Coordination between technical teams and stakeholders',
          'Participation in solution design',
          'Development team support',
          'Test management and feature validation',
        ],
        technologies: [
          'UML',
          'BPMN',
          'Jira',
          'Confluence',
          'Git',
          'Enterprise Architect',
          'Agile/Scrum',
        ],
        type: 'professional',
        icon: 'work',
      },
      {
        id: 2,
        role: 'Junior Full Stack Developer',
        company: 'Infrabel',
        period: '2021 - 2022',
        location: 'Belgium',
        description:
          'Development and maintenance of web applications for the railway sector.',
        achievements: [
          'Development of new features with Angular and ASP.NET Core',
          'REST services integration and database maintenance',
          'Participation in code reviews and continuous improvement',
          'Collaboration within an Agile team',
          'Implementation of unit and integration tests',
          'Application deployment on OpenShift',
        ],
        technologies: [
          'Angular',
          'ASP.NET Core',
          'SQL Server',
          'TypeScript',
          'C#',
          'Git',
          'OpenShift',
          'Docker',
        ],
        type: 'professional',
        icon: 'work',
      },
      {
        id: 3,
        role: 'Master in Industrial Engineering - Computer Science',
        company: 'HELHa',
        period: '2017 - 2021',
        location: 'Belgium',
        description:
          'Industrial engineering degree specialized in software development and computer systems.',
        achievements: [
          'Final year project: Development of Diabalik game with AI',
          'Mastery of fundamental software engineering concepts',
          'Project management methodologies training',
          'Network and operating systems education',
          'Software architecture and design patterns studies',
          'Participation in team-based practical projects',
        ],
        technologies: [
          'C#',
          'Java',
          'JavaScript',
          'SQL',
          'Python',
          'Machine Learning',
          'Networks',
          'DevOps',
        ],
        type: 'education',
        icon: 'school',
      },
      {
        id: 4,
        role: 'AWS Certified Solutions Architect',
        company: 'Amazon Web Services',
        period: '2021',
        location: 'Online',
        description: 'Professional certification for AWS cloud architecture',
        achievements: [
          'Designed and implemented scalable cloud solutions',
          'Expertise in AWS services and best practices',
          'Completed advanced cloud architecture training',
        ],
        technologies: ['AWS', 'Cloud Architecture', 'DevOps'],
        type: 'certification',
        icon: 'verified',
      },
    ];
  }

  getExperiencesByType(
    type: 'professional' | 'education' | 'certification'
  ): Experience[] {
    const cacheKey = `experiences_${type}`;
    const cached = this.cacheService.get(cacheKey);

    if (cached) {
      return cached;
    }

    const filtered = this.experiences.filter((exp) => exp.type === type);
    this.cacheService.set(cacheKey, filtered);
    return filtered;
  }

  getAllTypes(): string[] {
    const cacheKey = 'experience_types';
    const cached = this.cacheService.get(cacheKey);

    if (cached) {
      return cached;
    }

    const types = [...new Set(this.experiences.map((exp) => exp.type))];
    this.cacheService.set(cacheKey, types);
    return types;
  }

  // Optimisation de la performance avec trackBy
  trackByFn(index: number, item: Experience): number {
    return item.id;
  }
}

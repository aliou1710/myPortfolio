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
        role: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2022 - Present',
        location: 'Brussels, Belgium',
        description:
          'Lead developer for enterprise-level web applications, focusing on Angular and Spring Boot microservices architecture.',
        achievements: [
          'Implemented microservices architecture reducing system response time by 40%',
          'Led a team of 5 developers in delivering major platform features',
          'Introduced automated testing improving code coverage to 85%',
          'Mentored junior developers and conducted technical interviews',
        ],
        technologies: [
          'Angular',
          'Spring Boot',
          'Docker',
          'Kubernetes',
          'PostgreSQL',
        ],
        type: 'professional',
        icon: 'work',
      },
      {
        id: 2,
        role: 'Full Stack Developer',
        company: 'Digital Innovations',
        period: '2020 - 2022',
        location: 'Antwerp, Belgium',
        description:
          'Developed and maintained multiple web applications for clients in the financial sector.',
        achievements: [
          'Developed a real-time trading dashboard using Angular and WebSocket',
          'Implemented secure authentication system using OAuth 2.0',
          'Optimized database queries reducing load times by 50%',
          'Collaborated with UX team to improve user interface design',
        ],
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
        type: 'professional',
        icon: 'work',
      },
      {
        id: 3,
        role: "Master's Degree in Computer Science",
        company: 'University of Brussels',
        period: '2018 - 2020',
        location: 'Brussels, Belgium',
        description:
          'Specialized in Software Engineering and Distributed Systems',
        achievements: [
          'Thesis: "Microservices Architecture Optimization in Cloud Environments"',
          'Published research paper on distributed systems',
          'Led student team projects in software development',
          'Graduated with Distinction',
        ],
        technologies: [
          'Java',
          'Python',
          'Cloud Computing',
          'Distributed Systems',
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

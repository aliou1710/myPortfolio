import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skills: Skill[] = [
    { name: 'Java', level: 90, category: 'Backend' },
    { name: 'Spring Boot', level: 85, category: 'Backend' },
    { name: 'C#', level: 95, category: 'Backend' },
    { name: '.NET Core', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Docker', level: 80, category: 'DevOps' },
    { name: 'Git', level: 90, category: 'DevOps' },
    { name: 'CI/CD', level: 75, category: 'DevOps' },
    { name: 'Android Studio', level: 65, category: 'Mobile' },
    { name: 'Agile/Scrum', level: 90, category: 'Methodology' },
    { name: 'Jira', level: 85, category: 'Tools' },
    { name: 'Confluence', level: 80, category: 'Tools' },
  ];

  professionalHighlights = [
    {
      title: 'Full-Stack Development',
      description:
        'Expertise in both frontend and backend development, creating seamless end-to-end solutions.',
      icon: 'code',
    },
    {
      title: 'Functional Analysis',
      description:
        'Strong ability to analyze business requirements and translate them into technical specifications.',
      icon: 'analytics',
    },
    {
      title: 'Agile Methodology',
      description:
        'Experienced in Agile/Scrum practices, sprint planning, and iterative development.',
      icon: 'cyclone',
    },
    {
      title: 'Technical Leadership',
      description:
        'Proven track record of leading technical initiatives and mentoring team members.',
      icon: 'group',
    },
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }

  getSkillCategories(): string[] {
    return [...new Set(this.skills.map((skill) => skill.category))];
  }
}

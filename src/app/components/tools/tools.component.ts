import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Tool {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
  isCustomIcon?: boolean;
}

interface ToolCategory {
  name: string;
  icon: string;
  description: string;
  tools: Tool[];
}

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTooltipModule],
})
export class ToolsComponent {
  toolCategories: ToolCategory[] = [
    {
      name: 'Analyse Fonctionnelle',
      icon: 'assessment',
      description:
        "Outils pour l'analyse des besoins et la conception fonctionnelle",
      tools: [
        {
          name: 'Jira',
          icon: 'task_alt',
          description: 'Gestion de projets agiles et suivi des tickets',
          proficiency: 90,
        },
        {
          name: 'Confluence',
          icon: 'article',
          description: 'Documentation et collaboration',
          proficiency: 85,
        },
        {
          name: 'Enterprise Architect',
          icon: 'architecture',
          description: 'Modélisation UML et architecture logicielle',
          proficiency: 85,
        },
        {
          name: 'Office 365',
          icon: 'apps',
          description: 'Suite bureautique collaborative',
          proficiency: 90,
        },
        {
          name: 'Draw.io',
          icon: 'schema',
          description: 'Création de diagrammes et wireframes',
          proficiency: 90,
        },
        {
          name: 'Balsamiq',
          icon: 'brush',
          description: "Maquettes et prototypes d'interfaces",
          proficiency: 85,
        },
        {
          name: 'Miro',
          icon: 'dashboard',
          description: 'Tableaux blancs collaboratifs',
          proficiency: 80,
        },
        {
          name: 'Microsoft Visio',
          icon: 'account_tree',
          description: 'Modélisation de processus',
          proficiency: 85,
        },
      ],
    },
    {
      name: 'Frontend Development',
      icon: 'computer',
      description: 'Technologies et frameworks frontend',
      tools: [
        {
          name: 'JavaScript',
          icon: 'code',
          description: 'Langage de programmation frontend',
          proficiency: 90,
        },
        {
          name: 'TypeScript',
          icon: 'javascript',
          description: 'Langage de programmation typé',
          proficiency: 90,
        },
        {
          name: 'Angular',
          icon: 'web',
          description: 'Framework frontend principal',
          proficiency: 90,
        },
        {
          name: 'React',
          icon: 'integration_instructions',
          description: 'Bibliothèque UI',
          proficiency: 85,
        },
        {
          name: 'Node.js',
          icon: 'memory',
          description: "Environnement d'exécution JavaScript",
          proficiency: 85,
        },
        {
          name: 'CSS',
          icon: 'brush',
          description: 'Styles et mise en page web',
          proficiency: 90,
        },
        {
          name: 'Material Design',
          icon: 'palette',
          description: 'Framework UI',
          proficiency: 90,
        },
      ],
    },
    {
      name: 'Backend Development',
      icon: 'storage',
      description: 'Technologies et frameworks backend',
      tools: [
        {
          name: 'ASP.NET Core',
          icon: 'developer_board',
          description: 'Framework web Microsoft',
          proficiency: 85,
        },
        {
          name: 'ASP.NET Identity',
          icon: 'security',
          description: "Framework d'authentification et autorisation",
          proficiency: 85,
        },
        {
          name: 'Windows Forms',
          icon: 'window',
          description: 'Applications desktop Windows',
          proficiency: 80,
        },
        {
          name: 'Java/Spring Boot',
          icon: 'settings_suggest',
          description: 'Framework Java Enterprise',
          proficiency: 90,
        },
        {
          name: 'Python/Django',
          icon: 'code',
          description: 'Framework Python',
          proficiency: 80,
        },
        {
          name: 'Go',
          icon: 'speed',
          description: 'Langage de programmation performant',
          proficiency: 75,
        },
      ],
    },
    {
      name: 'Base de données',
      icon: 'storage',
      description: 'Systèmes de gestion de bases de données',
      tools: [
        {
          name: 'PostgreSQL',
          icon: 'database',
          description: 'Base de données relationnelle',
          proficiency: 85,
        },
        {
          name: 'MongoDB',
          icon: 'view_agenda',
          description: 'Base de données NoSQL',
          proficiency: 80,
        },
        {
          name: 'SQL Server',
          icon: 'table_view',
          description: 'Base de données Microsoft',
          proficiency: 85,
        },
        {
          name: 'Firebase',
          icon: 'cloud_queue',
          description: 'Base de données temps réel et plateforme cloud',
          proficiency: 85,
        },
      ],
    },
    {
      name: 'DevOps & Déploiement',
      icon: 'settings_applications',
      description: 'Outils de déploiement et intégration continue',
      tools: [
        {
          name: 'Git',
          icon: 'merge_type',
          description: 'Contrôle de version',
          proficiency: 90,
        },
        {
          name: 'SourceTree',
          icon: 'account_tree',
          description: 'Interface graphique Git',
          proficiency: 85,
        },
        {
          name: 'GitHub Desktop',
          icon: 'desktop_windows',
          description: 'Client Git simplifié',
          proficiency: 85,
        },
        {
          name: 'GitLab CI/CD',
          icon: 'merge',
          description: 'Pipeline et gestion de code',
          proficiency: 85,
        },
        {
          name: 'OpenShift',
          icon: 'cloud_sync',
          description: 'Plateforme Kubernetes Enterprise',
          proficiency: 80,
        },
        {
          name: 'Docker',
          icon: 'container_storage',
          description: 'Conteneurisation',
          proficiency: 85,
        },
        {
          name: 'Visual Studio Code',
          icon: 'code',
          description: 'Éditeur de code principal',
          proficiency: 90,
        },
        {
          name: 'Visual Studio',
          icon: 'developer_mode',
          description: 'IDE pour .NET',
          proficiency: 85,
        },
      ],
    },
    {
      name: 'Systèmes & Administration',
      icon: 'computer',
      description: "Systèmes d'exploitation et administration",
      tools: [
        {
          name: 'Linux',
          icon: 'terminal',
          description: 'Administration système Linux',
          proficiency: 85,
        },
        {
          name: 'Shell Scripting',
          icon: 'code',
          description: 'Bash, Shell scripting',
          proficiency: 80,
        },
        {
          name: 'Ubuntu Server',
          icon: 'dns',
          description: 'Gestion de serveurs Ubuntu',
          proficiency: 85,
        },
        {
          name: 'CentOS',
          icon: 'storage',
          description: 'Administration CentOS',
          proficiency: 80,
        },
        {
          name: 'Windows Server',
          icon: 'window',
          description: 'Administration Windows Server',
          proficiency: 85,
        },
        {
          name: 'PowerShell',
          icon: 'terminal',
          description: 'Scripting Windows',
          proficiency: 80,
        },
      ],
    },
    {
      name: 'Tests & Qualité',
      icon: 'verified',
      description: 'Outils de test et analyse de qualité',
      tools: [
        {
          name: 'JUnit',
          icon: 'check_circle',
          description: 'Framework de test Java',
          proficiency: 85,
        },
        {
          name: 'xUnit',
          icon: 'rule',
          description: 'Framework de test .NET',
          proficiency: 85,
        },
        {
          name: 'PyTest',
          icon: 'science',
          description: 'Framework de test Python',
          proficiency: 80,
        },
        {
          name: 'SonarQube',
          icon: 'analytics',
          description: 'Analyse de qualité du code',
          proficiency: 85,
        },
      ],
    },
  ];
}

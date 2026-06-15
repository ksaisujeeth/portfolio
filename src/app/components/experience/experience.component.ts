import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  companyShort: string;
  role: string;
  client: string;
  duration: string;
  isCurrent: boolean;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Accenture',
      companyShort: 'A',
      role: 'Java Developer',
      client: 'FedEx',
      duration: 'Jan 2026 – Present',
      isCurrent: true,
      responsibilities: [
        'Enabled search feature teams to onboard dependencies to the IFX (Isolated Feature Development/Testing/Rendering) stack',
        'Worked as Spring Boot Developer using Spring Boot and Spring Framework including Application Context, MVC, Data, Boot, and Security',
        'Attended Daily Scrum meetings and worked on JIRA tasks',
        'Performed coding, feature implementation, and Unit Testing using JUnit',
        'Participated in Code Reviews and fixed production/development issues',
        'Modified existing features and developed new functionalities',
        'Created services using Spring Boot, Hibernate, and Spring Data JPA',
        'Used GitHub for source code management and Maven for build and packaging',
        'Observed deployment process and production releases'
      ]
    },
    {
      company: 'Tata Consultancy Services',
      companyShort: 'TCS',
      role: 'Java Developer',
      client: 'Google Account',
      duration: 'Apr 2021 – Jul 2023',
      isCurrent: false,
      responsibilities: [
        'Developed and maintained Java applications',
        'Built RESTful APIs using Spring Boot',
        'Integrated enterprise systems with scalable architecture',
        'Used Spring MVC, Spring Data JPA, and Hibernate',
        'Created reusable components for maintainability',
        'Managed entity relationships using JPA/Hibernate',
        'Defined API contracts using OpenAPI/Swagger',
        'Implemented Spring Security authentication and authorization',
        'Wrote Unit Tests using JUnit and Mockito',
        'Created Integration Tests for API validation',
        'Collaborated with Business Analysts, QA Engineers, and Solution Architects',
        'Used Jira for sprint planning and task management'
      ]
    }
  ];
}

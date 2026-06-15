import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: 'code',
      skills: ['Java', 'Servlets', 'JDBC']
    },
    {
      title: 'Web Technologies',
      icon: 'globe',
      skills: ['HTML', 'CSS']
    },
    {
      title: 'Frameworks',
      icon: 'layers',
      skills: ['Spring', 'Spring Boot', 'Spring JDBC', 'Spring ORM', 'Spring MVC', 'Spring Batch', 'Spring JMS']
    },
    {
      title: 'Methodologies',
      icon: 'repeat',
      skills: ['Agile']
    },
    {
      title: 'Repository',
      icon: 'git',
      skills: ['GitHub']
    },
    {
      title: 'Tools & IDEs',
      icon: 'tool',
      skills: ['Eclipse IDE', 'VS Code', 'Spring Tool Suite (STS)']
    }
  ];
}

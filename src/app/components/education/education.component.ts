import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = {
    institution: 'Kakatiya Institute of Technology and Science',
    degree: 'Bachelor of Technology',
    field: 'Electronics & Communication',
    duration: '2016 – 2020'
  };
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    { icon: 'code', label: 'Clean Code', value: 'Best Practices' },
    { icon: 'layers', label: 'Architecture', value: 'Scalable Solutions' },
    { icon: 'zap', label: 'Performance', value: 'Optimized Systems' },
    { icon: 'users', label: 'Collaboration', value: 'Agile Teams' }
  ];
}

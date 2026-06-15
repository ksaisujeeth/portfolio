import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  fullText = 'Java Developer';
  private typewriterInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }
  }

  startTypewriter(): void {
    let index = 0;
    let isDeleting = false;
    
    this.typewriterInterval = setInterval(() => {
      if (!isDeleting) {
        this.displayText = this.fullText.substring(0, index + 1);
        index++;
        if (index === this.fullText.length) {
          setTimeout(() => { isDeleting = true; }, 2000);
        }
      } else {
        this.displayText = this.fullText.substring(0, index - 1);
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, 100);
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

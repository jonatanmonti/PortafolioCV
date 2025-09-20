import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type SectionId = 'hero'|'intro'|'history'|'mission'|'cv'|'contact';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy{
  active: SectionId = 'hero';
  private observer?: IntersectionObserver;

  sections: { id: SectionId; label: string }[] = [
    { id: 'hero',    label: 'Home' },
    { id: 'intro',   label: 'About me' },
    { id: 'history', label: 'Our History' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'cv',      label: 'CV' },
    { id: 'contact', label: 'Contact me' },
  ];

  ngOnInit(): void {
    const opts = { root: null, threshold: 0.5 };
    this.observer = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) {
        this.active = e.target.id as SectionId;
      }
    }, opts);
    this.sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) this.observer!.observe(el);
    });
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }

  scrollTo(id: SectionId) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

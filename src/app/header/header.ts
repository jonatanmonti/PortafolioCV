import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

type SectionId = 'hero'|'intro'|'history'|'mission'|'cv'|'contact';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy{
  active: SectionId = 'hero';
  private observer?: IntersectionObserver;
  private translate = inject(TranslateService);
  current = 'es';

  constructor() {
    this.current = localStorage.getItem('lang') || 'es';
    this.translate.use(this.current);
  }
  
  use(lang: 'es' | 'en') {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.current = lang;
  }

  sections: { id: SectionId; label: string }[] = [
    { id: 'hero',    label: 'HEADER.HOME' },
    { id: 'intro',   label: 'HEADER.ABOUT_ME' },
    { id: 'history', label: 'HEADER.HISTORY' },
    { id: 'mission', label: 'HEADER.MISSION' },
    { id: 'cv',      label: 'HEADER.CV' },
    { id: 'contact', label: 'HEADER.CONTACT_ME' },
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
